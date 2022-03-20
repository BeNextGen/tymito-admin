# Write your PowerShell commands here.

$versionCode = sh get_version_code.sh

$versionName = sh get_release_version.sh

Write-Output -InputObject ('Variable RELEASE_VERSION_CODE in Task 1, Stage 1 is: {0}' -f $versionCode)

Write-Host ('##vso[task.setvariable variable=RELEASE_VERSION_CODE]{0}' -f $versionCode)

Write-Output -InputObject ('Variable RELEASE_VERSION_NAME in Task 1, Stage 1 is: {0}' -f $versionName)

Write-Host ('##vso[task.setvariable variable=RELEASE_VERSION_NAME]{0}' -f $versionName)