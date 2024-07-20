
const toEmoticon = (s) =>{
    s=s.toLowerCase();
    switch (s) {
      case "shrug": return '|_{"}_|';
      case "smiley face": return ':)';
      case 'frowny face': return ':(';
      case 'winky face': return ';)';
      case 'heart': return '<3';
      default:
      return '|_(* ~ *)_|';
  }
  }
  
  console.log(toEmoticon("whatever")) 