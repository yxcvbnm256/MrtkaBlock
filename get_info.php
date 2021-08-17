<?php
// linking with google api php library
require __DIR__ . '/gapi/vendor/autoload.php';
// file with service account credentials
$service_account_file = 'credentials.json';
$spreadsheet_id = '13zWB1_uY5CdPGLuSXRWAgD0lE7QVrbTDW_9V5lqdNAY';

// create google api client and authenticate 
$client = new Google_Client();
$client->setAuthConfig($service_account_file);
$client->useApplicationDefaultCredentials();
$client->addScope(Google_Service_Sheets::SPREADSHEETS);
$service = new Google_Service_Sheets($client);

// spreadsheet id, can get from url when opening the sheet
$spreadsheetId = '1tT0FVCh_CkVk_LPE11fDpEFI8KS5jO_SzMeWj_4otv4';
// list name
$range = 'trainings';
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$current = date('Y-m-d');
$trainings = '';
$trainingsCount = 0;
if (!empty($values)) {
	foreach ($values as $row) {
		// if defined training is past current date, ignore it
		if ($row[0] >= $current && $trainingsCount < 4) {
			$trainingsCount += 1;
			$tmp = date_parse($row[0]);
			// append training in format DD. MM. YYYY
			$trainings .= '<p class="paragraph-2">' . $tmp['day'] . '. ' . $tmp['month'] . '. ' . $row[1] . ' ' . $row[2] . '</p>';
		}
	}
	// if no future trainings defined, its off season
	if ($trainingsCount < 1) {
		$trainings .= '<p class="paragraph-2">Off season!</p>';
	}
}
$range = 'achievments';
$response = $service->spreadsheets_values->get($spreadsheetId, $range);
$values = $response->getValues();
$achievments = '';
if (!empty($values)) {
	foreach ($values as $row) {
			// appends achievments according to current web styles
			$achievments .= '<div class="w-slide">';
			$achievments .= '<h5 class="heading-7">' . $row[0] . '</h5>';
			$achievments .= '<p class="paragraph-5">' . $row[1] . '</p>';
			$achievments .= '<div class="text-block-3">' . $row[2];
			// append as many lines there is (its teams definition - men, women, mix, men A, men B, ...)
			foreach ($row as $k => $v) {
				if ($k < 3)
					continue;
				$achievments .= '<br>' . $v;
			}		   
			$achievments .= '</div></div>';
		}
}

print $trainings . '|';
print $achievments;
