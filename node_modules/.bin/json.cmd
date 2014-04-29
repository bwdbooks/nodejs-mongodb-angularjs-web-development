@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\json\bin\json.js" %*
) ELSE (
  node  "%~dp0\..\json\bin\json.js" %*
)