import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbwZ525U2pMgBHGRRBbPwMfbMdCfx_Q-NKVi9i-IxPNOd_80oFedN9EN7rVqyYgbyJkR/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, bookGenre, manuscriptStatus, bookBrief } = body;

    // Send the exact required fields specified by the user
    const payload = {
      fullName: (fullName || '').trim(),
      email: (email || '').trim(),
      phone: (phone || '').trim(),
      bookGenre: (bookGenre || '').trim(),
      manuscriptStatus: (manuscriptStatus || '').trim(),
      bookBrief: (bookBrief || '').trim(),
    };

    // Google Apps Script endpoint execution with redirect handling
    let res = await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'manual',
    });

    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      const redirectUrl = res.headers.get('location')!;
      res = await fetch(redirectUrl, {
        method: 'GET',
      });
    }

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { success: res.ok, message: text };
    }

    if (data && data.success === false) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || 'Error processing lead submission.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: data?.message || 'Lead recorded successfully.',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Failed to submit lead to Google Apps Script.',
      },
      { status: 500 }
    );
  }
}
