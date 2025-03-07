
/*var Project = {
    'cyam': Array.from([1, 2], (_, i) => 'cyam'+i+'.png'),
    'omikuji': Array.from([1, 2], (_, i) => 'omikuji'+i+'.png'),
    'MNP': Array.from([1, 2, 3], (_, i) => 'MNP'+i+'.png')
}*/


function left(dir){
    document.write('<div class="left">');
    document.write('<div id="my_img">');
    document.write('<img src="'+dir+'image/ShuHan.JPG" class="my_img">');
    document.write('</div>');
    document.write('<div id="name">鄧書涵<br>Shu-Han, Deng</div>');
    document.write('<div id="headerTag1"></div>');
    document.write('<div id="page">');
    document.write('<a href="'+dir+'AboutMe.html">關於我</a><br>');
    document.write('<a href="'+dir+'page/ProjectShowcase.html">作品集</a>');
    document.write('</div>');
    document.write('<div class="information">');
    document.write('<div>');
    document.write('<img src="'+dir+'image/phone.png" class="list_icon"><a href="tel:0963712982">0963-712-982</a>');
    document.write('<br>');
    document.write('<img src="'+dir+'image/email.png" class="list_icon"><a href="mailto:asjwwu12@gmail.com">asjwwu12@gmail.com</a>');
    document.write('</div>');
    document.write('<img src="'+dir+'image/line.JPG" class="line">');
    document.write('</div>');
    document.write('<div id="headerTag2"></div>');
    document.write('</div>');
    document.write('<div id="headerGap"></div>');


    var header = document.getElementById("page");
    var tag1 = document.getElementById("headerTag1");
    var tag2 = document.getElementById("headerTag2");
    var gap = document.querySelector("#headerGap");
    window.onscroll = function() {myFunction(header, tag1, tag2, gap)};
}




function myFunction(header, tag1, tag2, gap) {
    var sticky1 = tag1.offsetTop;
    var sticky2 = tag2.offsetTop;
    if (window.pageYOffset > sticky1 && !header.classList.contains("page_fixed")) {
        header.classList.add("page_fixed");
        gap.style.height = "60px";
    }
    if (!(window.pageYOffset > sticky2) && header.classList.contains("page_fixed")) {
        header.classList.remove("page_fixed");
        gap.style.height = "0px";
    }
}


var Project = {
    'cyam': {'imgID': 0, 'total': 2},
    'omikuji': {'imgID': 0, 'total': 2},
    'MNP': {'imgID': 0, 'total': 3},
    'WebGame': {'imgID': 0, 'total': 7}
}
function change_ProjectShowcase(projectID, nowDir){
    var dir = nowDir+"image/ProjectShowcase/";
    try {
        Project[projectID]['imgID'] = (Project[projectID]['imgID']+1)%(Project[projectID]['total']);
        console.log(Project[projectID]['imgID']);
    } catch (error) {
        console.error("ProjectShowcase Error:", error);
    }
    document.getElementById(projectID).src = dir+projectID+Project[projectID]['imgID']+'.png';
}

/* 
    try {
        var files = fs.readdirSync(dir);
        var matchedFiles = files.filter(file => file.startsWith(projectID) && file.endsWith(".png"));
        var fullPaths = matchedFiles.map(file => path.join(dir, file));
        var newID = (imgID+1)%(fullPaths.length());
    } catch (error) {
        console.error("ProjectShowcase Error:", error);
    }
    var str = '<img id="cyam" class="ProjectImg" src='+img_path.replace(imgID, newID)+' onclick="change_ProjectShowcase('+img_path.replace(imgID, newID)+')">';
    console.log(str);
    document.getElementById(projectID).innerHTML = str;
*/