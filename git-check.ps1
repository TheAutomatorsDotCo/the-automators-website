Set-Location "e:\the automators website"

"=== Git Status ===" | Out-File -FilePath ".\git-output.txt" -Encoding UTF8
git status | Out-File -FilePath ".\git-output.txt" -Append -Encoding UTF8

"`n=== Git Diff Stat ===" | Out-File -FilePath ".\git-output.txt" -Append -Encoding UTF8
git diff --stat | Out-File -FilePath ".\git-output.txt" -Append -Encoding UTF8

"`n=== Git Log (last 5) ===" | Out-File -FilePath ".\git-output.txt" -Append -Encoding UTF8
git log --oneline -5 | Out-File -FilePath ".\git-output.txt" -Append -Encoding UTF8

Write-Host "Output saved to git-output.txt"
Get-Content ".\git-output.txt"
