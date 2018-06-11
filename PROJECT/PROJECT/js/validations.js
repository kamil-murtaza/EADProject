      function check()
      {
        var x1=document.getElementById("pass1");
        var x2=document.getElementById("pass2");
        if (x1.value==x2.value)
        {
          var ent=document.getElementById("valid");
          ent.innerHTML="";
          return;
        }
        else{
          var ent=document.getElementById("valid");
          ent.innerHTML="Both passwords should match";
          x1.value="";
          x2.value="";
        }
      }
      function checkName(e)
      {
          var key;
          var ascii;
          if (window.event)
          {
              key=window.event.keyCode;
              ascii=String.fromCharCode(key);
          }
          if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ".indexOf(ascii)>-1)
              return true;
          else 
              return false;
      }
      function validMail() 
      { 
        var val = document.getElementById("email").value; 
        var mail =/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
        if(!val.match(mail)) 
        {
          document.getElementById("email").value="";
          document.getElementById("vemail").innerHTML="Email is in wrong format.";          
        }
        else{
          document.getElementById("vemail").innerHTML="";                    
        }
      } 
      function validCNIC(x,id)
      {
          if (id.value.length==5 || id.value.length==13)
              id.value+="-";
          var key;
          var ascii;
          if (window.event)
          {
              key=window.event.keyCode;
              ascii=String.fromCharCode(key);
          }
          if ((("0123456789").indexOf(ascii)>-1))
              return true;
          else 
              return false;
      }
	  function checkCNIC()
	  {
		  var x=document.getElementById("cnic");
          if (x.value.length==15 && x.value.indexOf('-')==5 && x.value.indexOf('-',6)==13)
          {
              document.getElementById("cerror").innerHTML="";            
              return;
          }
		  else
		  {
			  x.value="";
			  document.getElementById("cerror").innerHTML="Invalid Format";
		  }
      }
      function checkRoll()
      {
        var x=document.getElementById("roll");
        var y=document.getElementById("vroll");
        if (roll.value[0]=='i' && roll.value[1]=='t' && roll.value[2]=='f')
        {
            y.innerHTML="";
            return;
        }
        else  if (roll.value[0]=='c' && roll.value[1]=='s' && roll.value[2]=='f')
        {
            y.innerHTML="";
            return; 
        }
        else  if (roll.value[0]=='s' && roll.value[1]=='e' && roll.value[2]=='f')
        {
            y.innerHTML="";
            return;
        }
        else 
        {
            x.value="";
            y.innerHTML="Invalid Format. Proper fromat : 'itf--' or 'csf--' or 'sef--'";       
        }
      }
      function checkCGPA(id)
      {
          var x=document.getElementById("cgpa");
          var y=document.getElementById("vcgpa");
          if (x.value>4.0 || x.value<1.0 || x.value[1]!='.')
          {
              x.value="";
              y.innerHTML="(1.0-4.0)"
          }
          else 
            y.innerHTML="";
      }