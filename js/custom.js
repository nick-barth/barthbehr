function GetCurrentPageName() { 
//method to get Current page name from url. 
var PageURL = document.location.href; 
var PageName = PageURL.substring(PageURL.lastIndexOf('/') + 1); 
 
return PageName.toLowerCase() ;
}
 
$(document).ready(function(){
var CurrPage = GetCurrentPageName();
 
switch(CurrPage){
case 'index.php':
 $('#li_home').addClass('active') ;
 break;
case 'about.php':
 $('#li_about').addClass('active') ;
 break;
case 'contact.php':
 $('#li_area').addClass('active') ;
 break;
 case 'contact.php':
 $('#li_attorn').addClass('active') ;
 break;
}
});