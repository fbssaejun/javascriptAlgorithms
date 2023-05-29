/*

QUESTION)

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

const domainName = (url) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/\.]+)/;

  // captured domain name is extracted using [1], which represents the first capturing group.
  return url.match(regex)[1];
}
