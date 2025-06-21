import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  document.getElementById('domainname').innerHTML = GenerateDomainName(pronoun, adj, noun, extension).join("");
}

function GenerateDomainName(pronoun, adj, noun, extension) {
  let results = [];
  let count = 1;

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extension) {
          results.push(count + ". " + p + a + n + e + "<br>");
          count++;
        }
      }
    }
  }

  return results;
}

let pronoun = ['the', 'our',];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io', '.dev', '.org',];