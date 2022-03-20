# Write your PowerShell commands here.
Write-Host "##vso[release.updatereleasename]$Env:RELEASE_VERSION_NAME ($Env:RELEASE_VERSION_CODE) $Build_BuildId"

Write-Host "##vso[release.updatebuildnumber]$Env:RELEASE_VERSION_NAME ($Env:RELEASE_VERSION_CODE) $System.JobId"