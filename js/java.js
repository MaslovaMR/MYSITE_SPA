var db1= openDatabase('db1','1.0','Kali Spa',2*1024*1024);

function CreateTable()
{
var db1= openDatabase('db1','1.0','Kali Spa',2*1024*1024);
db1.transaction(function (tx) 
	{
		tx.executeSql('CREATE TABLE IF NOT EXISTS t1 (id integer primary key autoincrement, Familia, Name, Otchestvo, Kategoria, Age, Date, Phone, email)');
	});
alert('Таблица создана');
}

function DeleteTable()
{
var db1= openDatabase('db1','1.0','Kali Spa',2*1024*1024);
db1.transaction(function (tx) 
	{
		tx.executeSql('DROP TABLE t1');
	});
alert('Таблица удалена');
}

function InsertRow()
{
	var thisFamilia=document.getElementById("tx1").value; 
	var thisName=document.getElementById("tx2").value;
	var thisOtchestvo=document.getElementById("tx3").value;
	var thisKategoria=document.getElementById("tx4").value;
	var thisAge=document.getElementById("tx5").value;
	var thisDate=document.getElementById("tx6").value;
	var thisPhone=document.getElementById("tx7").value;
	var thisemail=document.getElementById("tx8").value;

if ( (thisFamilia=='')||(thisName=='')||(thisPhone=='')||(thisemail=='') ) {alert('Необходимо заполнить обязательные поля');return;}

var db1= openDatabase('db1','1.0','my first database',2*1024*1024);
db1.transaction(function (tx) 
	{
		tx.executeSql('INSERT INTO t1 (Familia, Name, Otchestvo, Kategoria, Age, Date, Phone, email) VALUES (?,?,?,?,?,?,?,?)', 
      [thisFamilia,thisName,thisOtchestvo,thisKategoria,thisAge,thisDate,thisPhone,thisemail]);
	});
alert('Строка добавлена');
}



function OutRow(id,Familia, Name, Otchestvo, Kategoria, Age, Date, Phone, email)
{
	var row= document.createElement("tr");
	var idCell=document.createElement("td");
	var FamiliaCell=document.createElement("td");
	var NameCell=document.createElement("td");
   var OtchestvoCell=document.createElement("td");
   var KategoriaCell=document.createElement("td");
   var AgeCell=document.createElement("td");
   var DateCell=document.createElement("td");
   var PhoneCell=document.createElement("td");
   var emailCell=document.createElement("td");
	idCell.textContent=id;
	FamiliaCell.textContent=Familia;
	NameCell.textContent=Name;
   OtchestvoCell.textContent=Otchestvo;
   KategoriaCell.textContent=Kategoria;
   AgeCell.textContent=Age;
   DateCell.textContent=Date;
   PhoneCell.textContent=Phone;
   emailCell.textContent=email;
	row.appendChild(idCell);
	row.appendChild(FamiliaCell);
	row.appendChild(NameCell);
   row.appendChild(OtchestvoCell);
   row.appendChild(KategoriaCell);
   row.appendChild(AgeCell);
   row.appendChild(DateCell);
   row.appendChild(PhoneCell);
   row.appendChild(emailCell);

	document.getElementById("tabletable").appendChild(row);
}

function DoSelect()
{
var db1= openDatabase('db1','1.0','Kali Spa',2*1024*1024);
document.getElementById("tabletable").innerHTML = '<th>Id</th> <th>Familia</th> <th>Name</th> <th>Otchestvo</th> <th>Kategoria</th> <th>Age</th> <th>Date</th> <th>Phone</th> <th>email</th>';
db1.transaction(function (tx)
	{tx.executeSql('SELECT * from t1',[],function (tx,result)
		{for (var i=0;i<result.rows.length;i++)
			{
				var item=result.rows.item(i);
				OutRow(item.id,item.Familia, item.Name, item.Otchestvo, item.Kategoria, item.Age, item.Date, item.Phone, item.email);
			}
		});
	});
}

