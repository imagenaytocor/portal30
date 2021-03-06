/**
* @license 
* portal30mod.js
*/


Modernizr.load([
{
	load:'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
},
{
	test: Modernizr.mq('only all and (max-width:44.9em)'),
	yep : ['//estaticos.coruna.es/js/menu-min.js']
},
{
    test: Modernizr.mq('only all and (min-width:45em) and (max-width:59.9em)'),
    yep : ['//estaticos.coruna.es/js/menuTablet-min.js' ]
},
{
	test: Modernizr.mq('only all and (min-width:60em)'),
	yep : ['//estaticos.coruna.es/js/menuGr-min.js' ]
}/*,
{
	test: Modernizr.mq('only all and (min-width:60em) and (min-device-aspect-ratio: 16/9)'),
	yep : 'js/min/menuGrW-min.js'
}*/

//Modernizr.load([{load:"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"},{test:Modernizr.mq("only all and (max-width:44.9em)"),yep:"<%=ics.GetVar("CorunaPortal-menu_img")%>"},{test:Modernizr.mq("only all and (min-width:45em) and (max-width:59.9em)"),yep:["<%=ics.GetVar("CorunaPortal-libTablet_img")%>","<%=ics.GetVar("CorunaPortal-menuTablet_img")%>"]},{test:Modernizr.mq("only all and (min-width:60em)"),yep:["<%=ics.GetVar("CorunaPortal-libDesktop_img")%>","<%=ics.GetVar("CorunaPortal-menuDesktop_img")%>"]}]);




]);