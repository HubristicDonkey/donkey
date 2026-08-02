type ConfirmationEmailData = {
  name: string;
  eventType?: string;
  date?: string;
  location?: string;
  phone?: string;
  message: string;
};

const LOGO_URL = "https://hubristicdonkey.com/images/logo.png";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function summaryRow(label: string, value: string | undefined): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:14px 0;border-top:1px solid #232825;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f8189;width:120px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:14px 0;border-top:1px solid #232825;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.5;color:#f2ede4;">
        ${escapeHtml(value)}
      </td>
    </tr>`;
}

export function buildConfirmationEmailHtml(data: ConfirmationEmailData): string {
  const { name, eventType, date, location, phone, message } = data;
  const firstName = name.split(" ")[0] || name;

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enquiry received — Hubristic Donkey</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0a0c0b;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0c0b;">
      <tr>
        <td align="center" style="padding:48px 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
            <tr>
              <td align="center" style="padding-bottom:28px;">
                <img src="${LOGO_URL}" width="48" height="48" alt="Hubristic Donkey" style="display:block;border:0;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom:10px;">
                <span style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#8fa39a;">
                  Enquiry received
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom:22px;">
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:300;font-size:28px;line-height:1.3;color:#f2ede4;text-align:center;">
                  Thank you, ${escapeHtml(firstName)}.<br />I&rsquo;ll reply within two days.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:26px;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.75;color:#a2988a;">
                Got it — here&rsquo;s a copy of what you sent, for your records. If
                anything changes before I&rsquo;m back in touch, just reply to this
                email and it&rsquo;ll reach me directly.
              </td>
            </tr>
            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${summaryRow("Event type", eventType)}
                  ${summaryRow("Date", date)}
                  ${summaryRow("Location", location)}
                  ${summaryRow("Phone", phone)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top:22px;">
                <span style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6f8189;">
                  Message
                </span>
                <p style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.75;color:#d6cbb9;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 0 32px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:15px;color:#d6cbb9;">
                Talk soon — Hubristic Donkey
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid #232825;padding-top:24px;" align="center">
                <span style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;">
                  <a href="https://www.instagram.com/hubristic_donkey/" style="color:#6f8189;text-decoration:none;">Instagram</a>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <a href="https://www.etsy.com/shop/HubristicDonkey" style="color:#6f8189;text-decoration:none;">Etsy print shop</a>
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top:18px;font-family:Helvetica,Arial,sans-serif;font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:#4e5a55;">
                © 2026 Hubristic Donkey
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
