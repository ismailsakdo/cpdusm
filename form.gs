function sendFormNotification(e) {
  // Prevent runtime error if manually run without an event object
  if (!e || !e.namedValues) {
    Logger.log("This script must be executed via an On Form Submit trigger.");
    return;
  }

  const recipient = "drsai@usm.edu.my";
  const subject = "Notification: New Form Submission Received";

  // Parse fields safely using namedValues object
  const timestamp = e.namedValues["Timestamp"] ? e.namedValues["Timestamp"][0] : "N/A";
  const nama = e.namedValues["Nama"] ? e.namedValues["Nama"][0] : "N/A";
  const tarikh = e.namedValues["Sila Pilih Tarikh"] ? e.namedValues["Sila Pilih Tarikh"][0] : "N/A";

  // Build HTML Body
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>New Submission Notification</h2>
      <p>A new entry has been recorded in the system with the following details:</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Field</th>
          <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Details</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Timestamp</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Nama</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${nama}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sila Pilih Tarikh</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${tarikh}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 0.8em; color: #777;">This is an automated notification sent via Google Apps Script.</p>
    </div>
  `;

  // Fallback plain text body
  const plainTextBody = `New Form Submission Details:\n\n` +
                        `Timestamp: ${timestamp}\n` +
                        `Nama: ${nama}\n` +
                        `Sila Pilih Tarikh: ${tarikh}\n`;

  // Send Email
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody
  });
}
