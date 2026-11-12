/**
 * Middlemen Signups — Google Apps Script Web App
 * ------------------------------------------------
 * Paste this entire file into script.google.com (attached to your Sheet),
 * then deploy it as a Web App (see SETUP.md for step-by-step instructions).
 *
 * Every form submission from middlemen.online calls this endpoint and
 * appends one row to the "Signups" sheet tab automatically.
 */

// Column headers — must match the order in appendRow() below.
var HEADERS = [
  "Timestamp",
  "Reference",
  "Form Type",
  "Name",
  "Email",
  "Telegram",
  "Country",
  "Platform",
  "Account Status",
  "Monthly Earnings",
  "Task Domains",
  "2FA Active",
  "Profile URL",
  "Notes",
  "Timezone",
  "Hours/Week",
  "Domain",
  "Project Target",
  "Experience",
  "Topic",
  "Message",
  "Attachments #",
];

/**
 * Returns (or creates) the sheet named "Signups".
 * Adds the header row automatically on first use.
 */
function getSheet() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Signups");
  if (!sheet) {
    sheet = ss.insertSheet("Signups");
    sheet.appendRow(HEADERS);
    // Freeze header row
    sheet.setFrozenRows(1);
    // Bold the header
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

/**
 * HTTP POST handler — called by the Next.js API route on every submission.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet();

    sheet.appendRow([
      data.timestamp    || new Date().toISOString(),
      data.reference    || "",
      data.form         || "",
      data.name         || "",
      data.email        || "",
      data.telegram     || "",
      data.country      || "",
      data.platform     || "",
      data.status       || "",
      data.earnings     || "",
      data.domains      || "",
      data.twofa        || "",
      data.policyUrl    || "",
      data.notes        || "",
      data.timezone     || "",
      data.hours        || "",
      data.domain       || "",
      data.projectTarget|| "",
      data.experience   || "",
      data.topic        || "",
      data.message      || "",
      data.attachments  || 0,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, reference: data.reference }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * HTTP GET handler — simple health-check so you can verify the URL works
 * by visiting it in a browser. Returns { ok: true, service: "Middlemen Sheets Logger" }.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: "Middlemen Sheets Logger" }))
    .setMimeType(ContentService.MimeType.JSON);
}
