// Initialize your app
var myApp = new Framework7({
    modalTitle:'Framework7',
    material:true,
    swipePanel: 'left',
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//global variable & funcion
    var emas;
    var beras;
$$('#rate').on('click',function(){
    myApp.alert(':) keep support us','Thanks for Rate!');
});
// Callbacks to run specific code for specific pages, for example for About page:
//atur page
myApp.onPageInit('atur',function (page){
    //storedata
    $$('#save').on('click',function(){
       //change here
       emas=document.getElementById('emas').value;
       beras=document.getElementById('beras').value;
       localStorage.setItem('harga-emas',emas);
       localStorage.setItem('harga-beras',beras);
       myApp.alert('Data Saved!','Success');
    });
    document.getElementById('emas').value=localStorage.getItem('harga-emas');
    document.getElementById('beras').value=localStorage.getItem('harga-beras');
});
//zprof page
myApp.onPageInit('zprof',function (page){
    $$('#haha').on('click',function(){
       //change here
       var idset=["1a","2a","3a","4a"];
       var nilai=[];
       for (var i = idset.length - 1; i >= 0; i--) {
           nilai[i]=Number(document.getElementById(idset[i]).value);
       };
       var jumlah_peghasilan=12*(nilai[0]+nilai[1]);
       var jumlah_pengeluaran=12*(nilai[2]+nilai[3]);
       var jumlah_total=jumlah_peghasilan - jumlah_pengeluaran;
       var nisab=Number(localStorage.getItem('harga-emas')) * 85;
       if (jumlah_total>nisab) {
            var zakat=2.5/100 * jumlah_total;
             myApp.alert('Rp. '+zakat+',-','Zakat yg wajib dikeluarkan per tahun:');
       }else{
            zakat="penghasilan belum mencapai nisab.";
             myApp.alert(zakat,'Anda belum berkewajiban membayar zakat.');
       };
    });
});
//zsimp page
myApp.onPageInit('zsimp', function (page){
    $$('#hahaha').on('click',function(){
        var idseta=["1b","2b","3b","4b","5b","6b"];
        var nilaia=[];
        for (var i = idseta.length - 1; i >= 0; i--) {
            nilaia[i]=Number(document.getElementById(idseta[i]).value);
        };
        var jumlah_simpanan=nilaia[0]+nilaia[1]+nilaia[2]+nilaia[3]+nilaia[4];
        var jumlah_hutang=nilaia[5];
        var total_simpanan=jumlah_simpanan - jumlah_hutang;
        var nisaba=Number(localStorage.getItem('harga-emas')) * 85;
        if (total_simpanan>nisaba) {
            var zakat2=2.5/100*total_simpanan;
            myApp.alert('Rp. '+zakat2+',-','Zakat yg wajib dikeluarkan per tahun:');
        }else{
            zakat2="penghasilan belum mencapai nisab.";
             myApp.alert(zakat2,'Anda belum berkewajiban membayar zakat.');
        };
    });
});
myApp.onPageInit('zhart', function (page){
    $$('#hitung3').on('click',function(){
        var idsetb=['1c','2c','3c'];
        var nilaib=[];
        for (var i = idsetb.length - 1; i >= 0; i--) {
            nilaib[i]=Number(document.getElementById(idsetb[i]).value);
        };
        var jumlah_asset=nilaib[0];
        var jumlah_hutang_perusahaan=nilaib[1];
        var jumlah_saham=nilaib[2]/100;
        var total_asset=(jumlah_asset - jumlah_hutang_perusahaan) * jumlah_saham;
        var nisabb=Number(localStorage.getItem('harga-emas')) * 85;
        if (total_asset>nisabb) {
             var zakat3=2.5/100*total_asset;
             myApp.alert('Rp. '+zakat3+',-','Zakat yg wajib dikeluarkan per tahun:');
        }else{
             zakat3="penghasilan belum mencapai nisab.";
             myApp.alert(zakat3,'Anda belum berkewajiban membayar zakat.');
        };
    });
});
myApp.onPageInit('znisab', function (page){
    $$('#hitung4').on('click',function(){
        var nisabc=Number(localStorage.getItem('harga-emas')) * 85;
        myApp.alert('Rp. '+nisabc+',-','Nilai nisab wajib zakat dalam 1 tahun harta:')
    });
});
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}