const _0x5f3a=['\x70\x72\x6f\x6d\x70\x74','\x4d\x61\x73\x75\x6b\x6b\x61\x6e\x20\x50\x61\x73\x73\x77\x6f\x72\x64\x20\x41\x64\x6d\x69\x6e','\x59\x57\x49\x3d','\x70\x61\x6e\x65\x6c\x41\x64\x6d\x69\x6e','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x62\x65\x66\x6f\x72\x65\x65\x6e\x64','\x69\x6e\x73\x65\x72\x74\x41\x64\x6a\x61\x63\x65\x6e\x74\x48\x54\x4d\x4c','\x4c\x6f\x67\x69\x6e\x20\x42\x65\x72\x68\x61\x73\x69\x6c\x21','\x50\x61\x73\x73\x77\x6f\x72\x64\x20\x53\x61\x6c\x61\x68\x20\x61\x74\x61\x75\x20\x44\x69\x62\x61\x74\x61\x6c\x6b\x61\x6e\x21'];
let _0x2b8c=0x0;
let _0x4d1a;

window['\x7a\x6f\x6e\x65\x78\x68\x75\x62']=function(){
    _0x2b8c++;
    clearTimeout(_0x4d1a);
    if(_0x2b8c>=0xf){
        let _0x1c9d=window[_0x5f3a[0]](_0x5f3a[1]);
        if(_0x1c9d&&btoa(_0x1c9d)===_0x5f3a[2]){
            if(!document[_0x5f3a[4]](_0x5f3a[3])){
                let _html = '<div class="fab-container" id="panelAdmin" data-nosnippet style="display:flex;">' +
                            '<button class="fab-btn download" id="btnDownload" onclick="downloadWebFinal()"> \x42\x69\x6b\x69\x6e\x20\x46\x69\x6c\x65\x20\x53\x69\x61\x70\x20\x53\x65\x62\x61\x72</button>' +
                            '<button class="fab-btn save" id="btnSimpan" onclick="simpanPerubahan()"> \x53\x69\x6d\x70\x61\x6e\x20\x53\x65\x6d\x65\x6e\x74\x61\x72\x61</button>' +
                            '<button class="fab-btn" onclick="tambahVideo()"> \x54\x61\x6d\x62\x61\x68\x20\x56\x69\x64\x65\x6f</button>' +
                            '<button class="fab-btn" onclick="hapusVideo()"> \x48\x61\x70\x75\x73\x20\x56\x69\x64\x65\x6f</button>' +
                            '<button class="fab-btn" id="btnEdit" onclick="toggleEditMode()"> \x4d\x6f\x64\x65\x20\x45\x64\x69\x74</button>' +
                            '</div>';
                document.body[_0x5f3a[6]](_0x5f3a[5], _html);
            } else {
                document[_0x5f3a[4]](_0x5f3a[3]).style.display = 'flex';
            }
            alert(_0x5f3a[7]);
        }else{
            alert(_0x5f3a[8]);
        }
        _0x2b8c=0x0;
    }else{
        _0x4d1a=setTimeout(()=>{_0x2b8c=0x0;},0x3e8);
    }
};





function toggleEditMode() {
            isEditMode = true;
            document.getElementById("btnEdit").style.display = "none";
            document.getElementById("btnSimpan").style.display = "block";
            document.getElementById("btnDownload").style.display = "block";
            tampilkanHeader(); tampilkanGrid(); tampilkanMenu(); tampilkanPagination();
        }





        function simpanPerubahan(tanpaNotif = false) {
            let dataTarget = videoData;
            if (kategoriAktif !== "HOME") { dataTarget = dataTarget.filter(v => (v.kategori || "") == kategoriAktif); }
            if (hasilPencarian) { dataTarget = hasilPencarian; }

            const mulai = (halamanSekarang - 1) * videoPerHalaman;
            const akhir = mulai + videoPerHalaman;
            dataTarget.slice(mulai, akhir).forEach((v, idx) => {
                const i = mulai + idx;
                if(document.getElementById(`input-judul-${i}`)) {
                    v.judul = document.getElementById(`input-judul-${i}`).value;
                    v.tujuan = document.getElementById(`input-player-${i}`).value || "#";
                    v.tanggal = document.getElementById(`input-tanggal-${i}`) ? document.getElementById(`input-tanggal-${i}`).value : (v.tanggal || "");
                    v.views = document.getElementById(`input-view-${i}`).value;
                    v.durasi = document.getElementById(`input-durasi-${i}`).value;
                    v.kategori = document.getElementById(`input-kategori-${i}`).value;
                    v.label = document.getElementById(`input-label-${i}`) ? document.getElementById(`input-label-${i}`).value : (v.label || "");                 
               
               if (v.label === 'new' && !v.label_time) {
                 v.label_time = new Date().getTime(); 
              } else if (v.label !== 'new') {
                 v.label_time = null; 
              }
          }
      });

            menuData.forEach((menu, index) => {
                if(document.getElementById(`input-menu-text-${index}`)) {
                    menu.text = document.getElementById(`input-menu-text-${index}`).value;
                    menu.link = document.getElementById(`input-menu-link-${index}`).value;
                }
            });

            localStorage.setItem('dataHeaderLokal', JSON.stringify(headerData));
            localStorage.setItem('dataVideoLokal', JSON.stringify(videoData));
            localStorage.setItem('dataMenuObjLokal', JSON.stringify(menuData));
                      
            isEditMode = false;
            document.getElementById("btnEdit").style.display = "block";
            document.getElementById("btnSimpan").style.display = "none";
            document.getElementById("btnDownload").style.display = "none";                       
            tampilkanHeader(); tampilkanGrid(); tampilkanMenu(); tampilkanPagination();         
            if (!tanpaNotif) {
                alert("Data tersimpan sementara!");
            }
        }

  
      
      
        
       function bersihkanIframeInstan(elemenInput) {
       let teks = elemenInput.value;
        if (teks.toLowerCase().includes("<iframe")) {
        let ekstrak = teks.match(/src\s*=\s*["'](.*?)["']/i);
        if (ekstrak && ekstrak[1]) {
            elemenInput.value = ekstrak[1]; 
        }
    }
}
   



     
        function gantiGambarURL(i) {
            const dataTarget = hasilPencarian || videoData;
            let u = prompt("LINK GAMBAR:", dataTarget[i].gambar);
            if (u) { dataTarget[i].gambar = u; tampilkanGrid(); }
        }
  



   
   function tambahVideo() {
            let dataTarget = videoData;
            if (kategoriAktif !== "HOME") { dataTarget = dataTarget.filter(v => (v.kategori || "") == kategoriAktif); }
            if (hasilPencarian) { dataTarget = hasilPencarian; }

            const mulai = (halamanSekarang - 1) * videoPerHalaman;
            const akhir = mulai + videoPerHalaman;
            dataTarget.slice(mulai, akhir).forEach((v, idx) => {
                const i = mulai + idx;
                if (document.getElementById(`input-judul-${i}`)) {
                    v.judul = document.getElementById(`input-judul-${i}`).value;
                    v.tujuan = document.getElementById(`input-player-${i}`).value || "#";
                    v.tanggal = document.getElementById(`input-tanggal-${i}`) ? document.getElementById(`input-tanggal-${i}`).value : (v.tanggal || "");
                    v.views = document.getElementById(`input-view-${i}`).value;
                    v.durasi = document.getElementById(`input-durasi-${i}`).value;
                    v.kategori = document.getElementById(`input-kategori-${i}`).value;
                    v.label = document.getElementById(`input-label-${i}`) ? document.getElementById(`input-label-${i}`).value : (v.label || "");
                }
            });
            
            const bulanIndo = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const waktu = new Date();
            const tglOtomatis = `${waktu.getDate()} ${bulanIndo[waktu.getMonth()]} ${waktu.getFullYear()}`;
            videoData.unshift({
                gambar: "",
                judul: "",
                tujuan: "",
                views: "",
                durasi: "",
                kategori: "",
                label: "",
                tanggal: tglOtomatis 
            });
            tampilkanPagination();
            tampilkanGrid();
        }
        




        
    function hapusVideo() {
         if(videoData.length > 0){ 
                videoData.shift(); 
                tampilkanPagination();
                tampilkanGrid(); 
             }
         }

   
   
 
 
function downloadWebFinal() {
    simpanPerubahan(true);     
    
    const dataIndo = videoData.filter(v => v.kategori === 'Indo');
    const dataJav = videoData.filter(v => v.kategori === 'Jav');
    const dataWestern = videoData.filter(v => v.kategori === 'Western');  
        
    const unduhFile = (data, namaFile) => {
        if(data.length === 0) return; 
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = namaFile;    
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };   
    
    const unduhSitemap = (semuaData) => {
        if (semuaData.length === 0) return;
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
                    
        xml += `  <url>\n    <loc>https://zonexhub.net/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
       
        xml += `  <url>\n    <loc>https://zonexhub.net/?kategori=Indo</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
        xml += `  <url>\n    <loc>https://zonexhub.net/?kategori=Jav</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
        xml += `  <url>\n    <loc>https://zonexhub.net/?kategori=Western</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
                       
        semuaData.forEach(v => {
            if (v.judul) {
                let slug = encodeURIComponent(v.judul.replace(/ /g, '-'));
                xml += `  <url>\n    <loc>https://zonexhub.net/?v=${slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
            }
        });
        
        xml += `</urlset>`;
        
        const blob = new Blob([xml], { type: "application/xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
   
    unduhFile(dataIndo, 'indo.json');
    unduhFile(dataJav, 'jav.json');
    unduhFile(dataWestern, 'western.json');
    unduhSitemap(videoData); 

    setTimeout(() => {
        localStorage.removeItem('dataVideoLokal');       
        alert("3 File JSON dan 1 Sitemap.xml siap disebar! Sistem telah dibersihkan otomatis.");             
        location.reload();        
    }, 15000); 
}






function tampilkanGrid() {
    wadahVideo.innerHTML = "";
    const mulai = (halamanSekarang - 1) * videoPerHalaman;
    const akhir = mulai + videoPerHalaman;
    let dataAktif = videoData;
    
    if(kategoriAktif!=="HOME"){dataAktif=dataAktif.filter(v=>(v.kategori||"")==kategoriAktif);}
    if(hasilPencarian){dataAktif=hasilPencarian;}
        
    const homeBannerEl = document.getElementById("home-banner");
    const hotVideoEl = document.getElementById("hot-video-text");
    const sectionTitleEl = document.getElementById("sectionTitle");
    const titleH1 = sectionTitleEl ? sectionTitleEl.querySelector("h1") : null;
    
    if (halamanSekarang > 1) {
        if (homeBannerEl) homeBannerEl.style.display = "none";
        if (hotVideoEl) hotVideoEl.style.display = "none";
        if (sectionTitleEl && titleH1) { 
            sectionTitleEl.style.display = "block";
            titleH1.innerHTML = `Latest Porn - <span style="color: var(--accent-color); font-style: italic;">Page ${halamanSekarang}</span>`; 
        }
    } else {
        if (hasilPencarian) {
            if (homeBannerEl) homeBannerEl.style.display = "none";
            if (hotVideoEl) hotVideoEl.style.display = "none";
            if (sectionTitleEl) sectionTitleEl.style.display = "block";
        } else if (kategoriAktif !== "HOME") {
            if (homeBannerEl) homeBannerEl.style.display = "none";
            if (hotVideoEl) hotVideoEl.style.display = "flex";
            if (sectionTitleEl) sectionTitleEl.style.display = "none";
        } else {
            if (homeBannerEl) homeBannerEl.style.display = "flex";
            if (hotVideoEl) hotVideoEl.style.display = "flex";
            if (sectionTitleEl && titleH1) { 
                sectionTitleEl.style.display = "block";
                titleH1.textContent = "Most Popular & Viral Porn Video Collection: Indo, JAV, and Western."; 
            }
        }
    }
   
    if (dataAktif.length === 0) {
        wadahVideo.innerHTML = `
            <div data-nosnippet style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: transparent; margin-top: 10px;">
                <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 50px; color: #eb1f72; margin-bottom: 15px;"></i>
                <h3 style="color: #eee; font-size: 18px; margin-bottom: 8px;">Oops, Video Not Found</h3>
                <p style="color: #888; font-size: 13px;">We couldn't find any videos matching your search. Try using different keywords.</p>
            </div>`;
        return; 
    }
        
    const fragment = document.createDocumentFragment();
    dataAktif.slice(mulai, akhir).forEach((video, idx) => {
        const index = mulai + idx;
        const gambarLoading = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 10%22%3E%3Crect width=%2216%22 height=%2210%22 fill=%22%231a1a1a%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%221.5%22 font-weight=%22bold%22 font-style=%22italic%22 fill=%22%23999999%22%3ELoading%3Ctspan opacity=%220%22%3E.%3Canimate attributeName=%22opacity%22 values=%220;1;0%22 dur=%221.5s%22 begin=%220s%22 repeatCount=%22indefinite%22/%3E%3C/tspan%3E%3Ctspan opacity=%220%22%3E.%3Canimate attributeName=%22opacity%22 values=%220;1;0%22 dur=%221.5s%22 begin=%220.5s%22 repeatCount=%22indefinite%22/%3E%3C/tspan%3E%3Ctspan opacity=%220%22%3E.%3Canimate attributeName=%22opacity%22 values=%220;1;0%22 dur=%221.5s%22 begin=%221s%22 repeatCount=%22indefinite%22/%3E%3C/tspan%3E%3C/text%3E%3C/svg%3E";       
                const srcGambar = video.gambar 
                ? (video.gambar.startsWith('http') ? 'https://img.zonexhub.net/?url=' + encodeURIComponent(video.gambar) : video.gambar) 
                : gambarLoading;

        const card = document.createElement('div');
        card.className = `video-card ${isEditMode ? 'editing' : ''}`;
        card.id = `card-${index}`;
        if (!isEditMode) {
            card.onclick = () => arahkanKeLink((hasilPencarian || dataAktif)[index]);
        }
        
        const SEKARANG = new Date().getTime();
        const SATU_HARI = 24 * 60 * 60 * 1000; 

        if (video.label === 'new' && video.label_time) {
            if (SEKARANG - video.label_time > SATU_HARI) {
                video.label = "";       
                video.label_time = null; 
            }
        }
               
        let labelHTML = '';
        
        let otomatisNew = (index < 4 && halamanSekarang === 1 && !hasilPencarian);
        
        if (video.label === 'new' || otomatisNew) {
            labelHTML += '<div class="label-new">NEW</div>';
        } 

        if (video.label === 'populer') {
            labelHTML += '<div class="label-populer">POPULAR</div>';
        }

        card.innerHTML = `
            <div class="thumbnail">
              ${labelHTML}
                <img src="${srcGambar}" alt="${video.judul}" ${idx < 4 ? 'fetchpriority="high"' : 'loading="lazy"'} onerror="this.onerror=null; this.src='${gambarLoading}'; this.closest('.video-card').classList.add('gambar-mati');">
                <div class="overlay-stats">
                    <span><i class="fa-solid fa-eye"></i> ${video.views}</span>
                    <span><i class="fa-regular fa-clock"></i> ${video.durasi}</span>
                </div>
              <div class="edit-overlay" data-nosnippet onclick="event.stopPropagation(); gantiGambarURL(${index})">Link Gambar</div>
            </div>
            <div class="info" onclick="if(isEditMode) event.stopPropagation();">               
                <div class="title">${video.judul}</div>
                <div data-nosnippet>
                    <input type="text" class="edit-input-title" id="input-judul-${index}" value="${video.judul}" placeholder="Judul Video">
                    <input type="text" class="edit-input-link" id="input-player-${index}" value="${video.tujuan || video.player || ""}" placeholder="Link Embed Player" oninput="bersihkanIframeInstan(this)">                                
                    <input type="text" list="pilihan-views" class="edit-input-title" id="input-view-${index}" value="${video.views}" placeholder="Views (misal: 12K)">
                    <datalist id="pilihan-views">
                        <option value="424">
                        <option value="567">
                        <option value="893">
                        <option value="783">
                        <option value="968">
                        <option value="1K">
                        <option value="2K">
                        <option value="3K">
                        <option value="4K">
                        <option value="5K">
                        <option value="6K">
                        <option value="7K">
                        <option value="8K">
                        <option value="9K">
                        <option value="10K">
                        <option value="11K">
                        <option value="12K">
                        <option value="13K">
                        <option value="14K">
                        <option value="15K">
                        <option value="16K">
                        <option value="17K">
                        <option value="18K">
                        <option value="19K">
                        <option value="20K">
                        <option value="21K">
                        <option value="22K">
                        <option value="23K">
                        <option value="24K">
                        <option value="25K">
                        <option value="26K">
                        <option value="27K">
                        <option value="28K">
                        <option value="29K">
                        <option value="30K">
                        <option value="31K">
                        <option value="32K">
                        <option value="33K">
                        <option value="34K">
                        <option value="35K">
                        <option value="36K">
                        <option value="37K">
                        <option value="38K">
                        <option value="39K">
                        <option value="40K">
                        <option value="41K">
                        <option value="42K">
                        <option value="43K">
                        <option value="44K">
                        <option value="45K">
                        <option value="46K">
                        <option value="47K">
                        <option value="48K">
                        <option value="49K">
                        <option value="50K">
                        <option value="51K">
                        <option value="52K">
                        <option value="53K">
                        <option value="54K">
                        <option value="55K">
                        <option value="56K">
                        <option value="57K">
                        <option value="58K">
                        <option value="59K">
                        <option value="60K">
                        <option value="61K">
                        <option value="62K">
                        <option value="63K">
                        <option value="64K">
                        <option value="65K">
                        <option value="66K">
                        <option value="67K">
                        <option value="68K">
                        <option value="69K">
                        <option value="70K">
                        <option value="71K">
                        <option value="72K">
                        <option value="73K">
                        <option value="74K">
                        <option value="75K">
                        <option value="76K">
                        <option value="77K">
                        <option value="78K">
                        <option value="79K">
                        <option value="80K">
                        <option value="81K">
                        <option value="82K">
                        <option value="83K">
                        <option value="84K">
                        <option value="85K">
                        <option value="86K">
                        <option value="87K">
                        <option value="88K">
                        <option value="89K">
                        <option value="90K">
                        <option value="91K">
                        <option value="92K">
                        <option value="93K">
                        <option value="94K">
                        <option value="95K">
                        <option value="96K">
                        <option value="97K">
                        <option value="98K">
                        <option value="99K">
                        <option value="100K">
                        <option value="121K">
                        <option value="232K">
                        <option value="276K">
                        <option value="301K">
                    </datalist>
                    <input type="text" class="edit-input-title" id="input-durasi-${index}" value="${video.durasi}" placeholder="Durasi (contoh: 00:00)">
                    <input type="text" class="edit-input-title" id="input-tanggal-${index}" value="${video.tanggal || ''}" placeholder="Tanggal Post">    
           
                    <select class="edit-input-title" id="input-kategori-${index}">
                        <option value="${video.kategori}" selected>${video.kategori || "Pilih Kategori"}</option>
                        <option value="Indo">Indo</option>
                        <option value="Jav">Jav</option>
                        <option value="Western">Western</option>
                    </select>
                    
                    <select class="edit-input-title" id="input-label-${index}" style="border-color: #f1c40f;">
                        <option value="${video.label || ''}" selected>${video.label ? video.label.toUpperCase() : "Tanpa Label"}</option>
                        <option value="">Tanpa Label</option>
                        <option value="new">NEW (Hijau)</option>
                        <option value="populer">POPULAR (Merah)</option>
                    </select>
                </div>
            </div>`;
        
        fragment.appendChild(card);
    });

    wadahVideo.appendChild(fragment);   
 }
 
 
 
 
 document.addEventListener('input', function(e) {
    if (e.target.classList.contains('edit-input-title') && e.target.id.startsWith('input-judul-')) {
        let teks = e.target.value;
        e.target.value = teks.replace(/\b\w/g, function(huruf) { 
            return huruf.toUpperCase(); 
        });
    }
});