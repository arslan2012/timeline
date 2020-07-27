import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import solarizedlight from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight";
import powershell from "react-syntax-highlighter/dist/esm/languages/prism/powershell";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
SyntaxHighlighter.registerLanguage("pwershell", powershell);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);

export default () => {
  const installScoop = `Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
# or shorter
iwr -useb get.scoop.sh | iex`;
  const wtJson = `{
  "acrylicOpacity" : 0.75,
  "fontFace": "Hack NF", // use your powerline font
  "closeOnExit" : true,
  "commandline" : "%UserProfile%\\\\scoop\\\\apps\\\\msys2\\\\current\\\\usr\\\\bin\\\\env.exe CHERE_INVOKING=1 MSYS=enable_pcon MSYS2_PATH_TYPE=inherit /bin/zsh -i -l",
  "name" : "ZSH",
  "snapOnInput" : true,
  "startingDirectory" : ".",
  "useAcrylic" : true
}`;
  const vscodeJson = ` "terminal.integrated.shell.windows": "%UserProfile%\\\\scoop\\\\apps\\\\msys2\\\\current\\\\usr\\\\bin\\\\zsh.exe",
 "terminal.integrated.fontFamily": "Hack NF", // use your powerline font
 "terminal.integrated.shellArgs.windows": ["--login", "-i"],
 "terminal.integrated.env.windows":
 {
     "MSYS2_PATH_TYPE": "inherit",
     "MSYS":"enable_pcon",
     "CHERE_INVOKING":"1"
 }`;
  return (
    <div>
      <h1>How I set up msys2 and use zsh on windows</h1>
      <h3>1. download Windows Terminal</h3>
      <p>Download Windows Terminal from Microsoft Store</p>
      <img src={"/img/blog/mstore.webp"} alt="" />
      <h3>
        2. download <a href="https://scoop.sh/">scoop</a>
      </h3>
      <SyntaxHighlighter language="powershell" style={solarizedlight}>
        {installScoop}
      </SyntaxHighlighter>
      <p>
        Note: if you get an error you might need to change the execution policy
        (i.e. enable Powershell) with
      </p>
      <SyntaxHighlighter language="powershell" style={solarizedlight}>
        Set-ExecutionPolicy RemoteSigned -scope CurrentUser
      </SyntaxHighlighter>
      <h3>3. use scoop to download 7zip git and msys2</h3>
      <SyntaxHighlighter language="bash" style={solarizedlight}>
        scoop install 7zip git msys2
      </SyntaxHighlighter>
      <h3>4. use msys2 to download zsh</h3>
      <SyntaxHighlighter language="bash" style={solarizedlight}>
        pacman -Syu zsh
      </SyntaxHighlighter>
      <p>
        you might wanna edit /etc/pacman.d/mirrorlist.* first to get faster
        download
      </p>
      <h3>5. set up windows terminal to use zsh</h3>
      <p>add following line to windows terminal settings.json</p>
      <SyntaxHighlighter language="json" style={solarizedlight}>
        {wtJson}
      </SyntaxHighlighter>
      <h3>6. set up vs code to use zsh</h3>
      <p>add following line to vs code settings.json</p>
      <SyntaxHighlighter language="json" style={solarizedlight}>
        {vscodeJson}
      </SyntaxHighlighter>
      <h3>7. customize your zsh</h3>
      <a href="https://github.com/ohmyzsh/ohmyzsh">oh-my-zsh</a>
      <br />
      <a href="https://github.com/romkatv/powerlevel10k">powerlevel10k</a>
      <h4>8. enjoy POSIX shell on windows</h4>
    </div>
  );
};
