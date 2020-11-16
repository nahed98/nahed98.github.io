function moyenne(frm)
		{
			var moy =(Number(frm.Dc1.value)*Number(frm.cof1.value)+Number(frm.Dc2.value)*Number(frm.cof2.value)+Number(frm.Ds.value)*Number(frm.cof.value))/(Number(frm.cof1.value)+Number(frm.cof2.value)+Number(frm.cof.value));
			document.write("votre moyenne est: ", moy);
		}