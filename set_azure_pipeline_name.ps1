# Write your PowerShell commands here.
Write-Host "##vso[build.updatebuildnumber]$Env:RELEASE_VERSION_NAME ($Env:RELEASE_VERSION_CODE) $Env:BUILD_BUILDNUMBER"