$GameDirectory = "game";
$GameDirectoryRoot = Join-Path $PSScriptRoot $GameDirectory;

$VariableList = "variable_rename_list.txt";
$VariableFile = Join-Path $PSScriptRoot $VariableList;

Write-Host "File is " $VariableFile;
Write-Host "Directory for .twee scripts is " $GameDirectoryRoot;

if (-Not (Test-Path -Path $VariableFile)) {
    Write-Host "The specified file apparently does not exist, quitting.";
    Exit-PSSession;
}

if (-Not (Test-Path -Path $GameDirectoryRoot)) {
    Write-Host "The specified game directory does not exist, quitting.";
    Exit-PSSession;
}

$ReplaceVariables = @();

foreach ($line in Get-Content $VariableFile) {
    if ($line -match '^\$') {
        $ReplaceVariables += , $line.Split(" ")
    }
}

if ($ReplaceVariables.Length -eq 0) {
    Write-Host "No variables to replace found, quitting.";
    Exit-PSSession;
}

$GameFileList = Get-ChildItem -Path $GameDirectoryRoot -Recurse -Include "*.twee";

if ($GameFileList.Length -eq 0) {
    Write-Host "No files found in the game directory, quitting.";
    Exit-PSSession;
}

Write-Host $ReplaceVariables.Length "variables to replace found";
Write-Host $GameFileList.Length "files found, please make a backup and press enter to continue";
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');

Write-Host "Working...";