document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function snakeBite(){
  let input = "snake bite";
  output(input);
}

function motarAccd(){
  let input = "motor accident";
  output(input);
}

function electricShock(){
  let input = "electric shock"
  output(input)
}

function dogBite(){
  let input = "dog bite"
  output(input)
}
function heartAttk(){
  let input = "heart attack"
  output(input)
}


function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="data:image/png;base64,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" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  
  botDiv.id = "bot";
  botImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABDlBMVEVAiP9TaXf///////0gY+VVaHZfrf/9//8/if5AiP4vdPEkaej///w/hv/t8PI3g/9NZHehwv3z9vhXa371//9eq//K5P1eke86f/SSuf9KYnGns7uzur///P////hgr/9OmP9Zpf/p+f9Ikf5Yo/9Bivu64v/X6v+y2f/f9P50gIpOYWxndH9MZnBDgeVimO/U3eCixfGry/Ds//9/jJRjnfyHrPM8hPBvne5+revB2PVrsPqZz/pQjfLi7f95pPGHwfy+1v+u2/6kz//L6f9kp+qVzf1+vvzq8P6avu9ckem90vlto/98q/+Jtf9bl/+RrOeRm6O+ytDb5OeJiotYZ2s4eeaSprRvnOS0yfv3flLnAAANt0lEQVR4nO1dDVvayBaOMzfMTJshiIFGNAGDEfmoH60ShUJr7d7V2nar3HW3//+P3HMmwQprUdrtY0nm3UelGljyPuecec/HDIahoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGRDkgpDSHExO/41z8aRhhyG64wpPjHczMIpEvegiHCMVvS4PALcXgYcmCL85mvk34gF1LwkIcKnCNRYswK/FbIZ2XmB90IaXvUt/orgNc3N0q3sXFYD8d/BH6iHmWWHxxlnCqMVCI8LOVyOfwao1QtbYbgmcoLuXjtWIxRth/iv7MMIcNNxdNtsgDVmC3kSx471GMe6V1DMHvs9/uYgJvfzJUmrAr+VcUHNY5uh4vgkUMJI+SLm227ArLqwE01dxOtAKUNRVepLoAcDpRBzKIQ4Y9sg2fWsoTSUGhYpf5Wo/EKvr1rNPBrq4+2talMC/SCGGwzNnztSiO7IX5MFgSo/mmv9yb3tneyfQLY3u6jH2LUQmnFpXFddt6DXeHDjCImayOHTocOWI3dUH1V0TVD1FvoeNwtO88MEFwZ9UKM3Wgo9SpwlEM3TPD2VWNY7lfRD0Nc/VDCG0gWMJVBL0R1jrkLPAgNrpbC/qvtt9sA+Hb+5u32qVogS8oNMU8UyrKMTMosKYS0bcO2bamUA7jhxiaI+I1NtRrCA1wMMcBrsngo3PpquTEcNhpnw1OI77n+u2Zz2Bxu/QY+eHbWLPdRo2qyEFIeBcSnhFggNZu/VSGcn56iF/63//v2xckp/KzmqqUIk+msk8XlbkCJ5RGC+TF7C6IU+Cop18NlsRQr+prKpTNPVtQjHrMIQ1Di7Cvtjoui0hBVJRtyh6qkJbNOlnzmMOYXz/L5MwRlL/rIkyIpN04UN7lQISvrZNldRjzCil6xCF8Qtujw9LiKGSFQltSzolsl0WyTdcyoR4r5fJGxPCCwLIudh+GhKjrUsFoqxJiWzFvWa4d4lBWBK/gGP3xKybmtCluljUj5nvhag882WcazwCJWMQDbyhedYr7oMeIchVLUIF4N4noyH5eVM0+W+4J6HkYsNCsMXB7tXRtYgShthlPXZp0sbgzeWSBJx6DEb77HZphRKw2mizBZJ0vEvS1CqWKKElbe5apxyEGITlVhsk4Wyifxcfnk4syy6Fnv5Es3AqpEKFQ/QsSOOOaMq2iPZHGJ5b/xa+C1PHlOmis3YEGgzm3bPnYoO3dtqRqpMsQeatxhNaQ9hlQPkSxbJv/4+hdVdcYnPfYt/Txgw0b1lt0ybQ4UA3DDQBUOPCAd9Q8fP61O4HPD+TL5m9VPH/8Q8ETOuUixYRnohSHcIwfB9Rko4uqGVW5ju7U3vSaj4J9jwCPf9z2PwCP8Sn4LV7Cgsf/Bto1Q2I99Qz8fQoa/DwwVpcBCcDkMVxvUInOAkuB0F2clcJREGikeG4GbtKWIm4PYuKmfB2A6c5EF9mU5vV2gSXnkY9/RzwOGqDBEwvA2bbvbVC43F1lY4vGo82IAa0S6I5cKVGha8N0ebFNGLMgW5yAKqKKWDwyTYdfF6a30d8rwLsPXTXoHFzOQXJBcDBIkgtCXYj9MAF4ojwNr0qRY8R6waWovovTblWrQHztYZh6jeLV20DFXZsLstC7X8zeMefDoJEqzkhcc+/Ehd7ug5KmDEQhMZO/SbFdMc+k+VCrtdmu9GFNFPZAcF5ENS6tq36YSKJHso8DCMrOH3rR30K7cy9MtxjpXDJZDCFoW89i+a8hkAi51kDgDaduDJsglEOgg0otr7fYcVC0tFQqVgxEw5SvJ5Xx242mTFAIzYJxUI9RnmMqQ0QH43/0OOGVc5hWzQHNAzKPBrowHSdIHyWGtd1cZoRRFABt1wAPnJmvJbK+jhADDZKTncpHOxFrtBxg0x0vaqGMiV/OTBWwRbK6BfnBWbZnOmCVAYLn7ibCkxc7S3Dwldmi2r/BVwECt5o5MZT6tajK7gZdI9/99nw/G3/8cMazr+B47d400koUB3v2CZQZYyMj6fMvgFCotz8NE0SPDKK0BHiIWTriDGM3Pb1QTBta+wgQRBITTTefgqeSqCq+E+6VZ+BGylpY6RQzwxKLlKF2rodpbKG3DjrYoUaWDvLm08mNkwYpIGNpW8N6wcaOZIVJhYWpDYb27vBwOAqqch60VVn7MDZcKLYdhaklYN8otrx5yTKUe+07/BYjQHpw4lhVErx3CfDCIYsv8Dt0wQdZSe49gd4OQC/eVRdiwG6Yi0Ev7dQCZIOu5pzhVCpY1aptfLauCuJ8fvOjmMiRrTa2qjDV2dolFfP9ksRWEynHhFo4ChqX2/ese89V+L9ANcLsrppLwl3ujvfXOPXSZ7TW4bA1FP6ozcEOzhQV5iPDB7k5APMgWL1xsRS6y7MKNqeVYhh5HDbUSEnb5XJEF1mWaeyjFSfGyMtMvO+B0wHf+oB2TBZbZwVogGKpzdN3EF6VjFbGYoQv7XZA6HzPL80C476q8ELK6YuuGLIw8lnKnzizlVdlDeYbV585zMyELn4qvxo7dMvUhsaaNCNha1MjFwxAsK9r2IBAzhzx7Fqi+A4E7RrLMlULlMulEELJXQLae383VX8gL0sWu2rHzrqyALlWZEz1/0iMo3zxnVy5uwQYnXoTcwUYOJL3Ozq6D1KB8V+UGtI6rpLFDiBMXIe4IVyYaVtLVAaLjBBF+ua4si7J99wWSBa9znsw7LyLioZfBSzJJFsu3E7JW2qObHgQ7WPo2WfkbsljrTrJUs4jtx13JhcQ3yTI1Wf8Avm10Q/ItN1wZuyFBN5xB1r1uaCVuuLg7hTnONEh3S63wDAJ8vKs+CfDIVuESG1sAi+7N6of9lcRyFeCXpgO82wPNiw2MI6GqsY99398HoYqjx3BTwAhIh4DFZMXSAY0LZZaawmKtmdJhpJ4IoqoV10rH0gHRdcsWJFGW39jBNWVBU8TkVJ6dhpq6VaLUUnm0EqUrqODNzggNBkRpoTCjDmG2RkqUFg/aN2SZeWWwjIEoZSgd2LEU+P9bzCHK8SFGfzvM9zDdKUN2wsbpzkrcrTDX9vKjq1Zlds3GNNdGeFk7qcJDrhSnO4wF76MA0kSfXURxyFpMssYQ3YBaDiTS546lFNFe2yzcSqSXHpZI37osTqTBecG9h9EupAjU34oWNFhNgAtZ6zFVogG/wR2tEKAKM1PB+wCJNIQsS42d9tx9CFzBqruokX0SOB/5x+qX03AQWEz54Vpliqw5qcPiXzGeziWfo/7p8ofQFotbbbgNPLXOwK33sGxZajfryJwVzu9HYen5mtK3vhW8x639kqdsDFCGccOCQay5rPwQWVigUTll+hoWY3A5CNQQLZrWj3AVzztgPZ86x+5j39ZPAVdNVj9usq59o8lamcbdZLWKyDnQ1Ryksn2vujx/v2Sz2/eXa5OIS6Pj65KSlwkJOCp6C3Ln63QOhuDMkftiPHGcv9MRK8HkoC32NiZMKnbCKzURT2LDWtA68mxIGRoS88OEhj8njCYh66/1SVy2p0k1TdCjagaAMWfZTaUTxvsupbscF2XgVvfuGmabilhqjHLSDUG7q90DSFb5mod8YesMM4E7wmRUxlQahxzJCFO9uZZF0yxUzHXUHox6lvXySHLIBe0UkiUVWcZ7SBR9z8MB3Pxl++4OxbdQWKm09tRqCtHdd845lq8WtUUxE7jG42x39yXO3+KINmV7rflGu02chKf4XIuyF9cSA1Y6JkKmwbnapukuO75lkWTTwNVBW20aMGdA/bHdbnfWinEziIEPkl4Ue/Zj39bPhDSiVYbDxuNORf7qsgXBaCaem52Dta/dDQ9Ww/IglYF9ChBmlh3qTGxdwtNEZmJypxOk470olbFqCug3brdJx3vo5tlyeEOWsx8ZYaodMAbHfWH2szIWtiib3nY4Gx71fVhGabPrinQMr90DIbH6JN3VwIIbJ3OxBZEd6HIuBq46xTT9fohrIp76btT2HcuawwkVWaAYyh9wVcXDMNJvWmpzmKE+mmGwfEbm233vexe7GPQkHiacBT9MIMPQsO3D00bAsJo+myXf93Fw9ORjaBvGeNhWHWsqF7WrOhfU2SFYP+eHnz6tLt+H1U8f6uqQAzw8o3aDesizcIAIrvwqXRR4gs/tI3ruAp7aE1NlGPXNrx9VUNqop7MGPwWh2tVCfWQRvwd4ThSP90qp0+9K1WpJfQwG/KxlQG99D9Qowwaevt/v/w7/lfA82M0MuOH3QDlhqZo7bzabw0bzrTo+t1R/7Lf166KWfFRPvx+fNJyr1h77Lf2ygJCVK4FlBcG7bfhe/i2Xqz32e/o1Ebshxiz8bId+v6rifD0Ly+H8UPtbNnKlN80XW8PhsHn+bquvPihE459Q2qEefwIUHmCNx8qXBtqw7gbWGnhtAz+YIBefJ79RDzOQ7nwn8LN76rVDJeJLm7VaKLJQMf0B4HFJdXDDgQBorr4BaYxrDVJsVg9xMlJyqQP8TEj1mZJZKML/SxBhBiql/xZEOmeN7sfD7lpMXpfBwC4exBQue0bKz3F9ACS3nzx9EJ7Y2XS7W5DyyX8eiKd21st80piDrKz7IVjW0wfwhNc8zUALejawsfPkYbCzuABOAqTlfb2dGLAaZj7Ca2hoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaDw6/g9zznjjwS40SAAAAABJRU5ErkJggg==";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}