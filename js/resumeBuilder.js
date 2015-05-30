var formattedName = HTMLheaderName.replace("%data%", "Kenny Chao");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
