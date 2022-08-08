// Get the current year
let getAnno = document.getElementById('anno');
let getDate = new Date().getFullYear();
console.log(getDate);
getAnno.innerHTML=String(getDate);

// Set a logic to adjust date

let tanggal = $('#tanggal');
let bulan = $('#bulan');
let tahun = $('#tahun');
console.log(bulan.val());
console.log($('#bulan option:selected').html());

bulan.change(function(event){
    let bulanFix = $('#bulan option:selected').html();
    console.log(bulanFix);

    if(bulan.val() == 'apr' || bulan.val() == 'jun' || bulan.val() == 'sep' || bulan.val() == 'nov'){
        $("#tanggal option[value='31']").hide()
    }else if(bulan.val() == 'feb'){
        $('#tanggal option[value="31"]').hide();
        $('#tanggal option[value="30"]').hide();
        $('#tanggal option[value="29"]').hide()
    }else{
        $('#tanggal option[value="31"]').show();
        $('#tanggal option[value="30"]').show();
        $('#tanggal option[value="29"]').show()
    };
});

tahun.change(function(event){
    console.log(Number($('#tahun option:selected').html()));
    
    if((tahun.val()%4 == 0) && (bulan.val() == 'feb')){
        //console.log('yeet');
        //tanggal.append('<option value='+29+'>'+29+"</option>")
        $('#tanggal option[value="29"]').show();
    }else if((tahun.val()%4 != 0) && (bulan.val() == 'feb')){
        $('#tanggal option[value="29"]').remove();
    }
});