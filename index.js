//Credit to https://github.com/ApoorvTyagi
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

let monthNames = ["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there，I'm Rob 🙋‍♂️
I'm a PhD student at [Queen's University Belfast](https://pure.qub.ac.uk/en/persons/rob-williamson). Open to collaborating on innovative ideas, get in contact with me:
<img align='right' src='https://user-images.githubusercontent.com/5713670/87202985-820dcb80-c2b6-11ea-9f56-7ec461c497c3.gif' width='200"'>

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rob-williamson-4ba61812b/)
[![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:rwilliamson15@qub.ac.uk)

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${(new Date().getDate()-1)+'-'+ monthNames[new Date().getMonth()]+'-'+new Date().getFullYear()}

## 👋 About Me
- ✨ Gaming Addict 🎮
- ✨ Football Addict ⚽
- ✨ Music Addict 🎸

## ⚡ Technologies
![Neovim](https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)
![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)
![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)
![Octave](https://img.shields.io/badge/OCTAVE-darkblue?style=for-the-badge&logo=octave&logoColor=fcd683)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

## 🔭 I’m currently working on
- 🌱 My [PhD](https://pure.qub.ac.uk/en/persons/rob-williamson)
- 🌱 Contributing more to open source projects
- 🌱 Anything I can code in my spare time

<img align='right' src='https://github-readme-stats.vercel.app/api?username=RobWilliamson15&count_private=true&show_icons=true&include_all_commits=true&theme=radical' width='400"'>

<!--![Github Stats](https://github-readme-stats.vercel.app/api?username=RobWilliamson15&count_private=true&show_icons=true&include_all_commits=true&theme=radical)-->
  
<!--<img src="https://user-images.githubusercontent.com/38964964/167205200-026483f2-8b0f-4101-b76f-96347a246889.png" width="50%" alt="Python fake tip: to improve the readability of your code, you can import __future__ as tomorrow">-->

## 🎧 Now Playing
[![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=119121484&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false)](https://spotify-github-profile.vercel.app/api/view?uid=119121484&redirect=true)

  


![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=RobWilliamson15.RobWilliamson&theme=radical)
<!--
**RobWilliamson15/RobWilliamson15** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
`

console.log(readme)
