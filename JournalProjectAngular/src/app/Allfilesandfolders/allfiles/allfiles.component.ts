import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.scss']
})
export class AllfilesComponent {
  public imagePath:any;
  imgURL: any;
  public message: any;
  allSubFolders: any;
  SelectedFiles: any;
  public isLoggedIn: boolean = false;
  public remove: any = false;
  uid: any; roleid: any;
  fileupload:  any; fid: any;
  userName: any; sMsg: any;
  ID: any; pdfUrl: any; closeResult: any; pdfUrl1: any; pdfUrl2: any; pdfUrl3: any;
  msg: any; m: any; zzz: any;
  details: any;
  updatemsg: any; u: any; fl: any;uploadheres: any;
  RoleID: any ;
  roleName: any;
  addFriend: any;
;
  pid: any; FormData: any; subf: any; Press: any;
  Pid: any; zoom_to: any;
  Friends: any; shareitem: any;
  selected:any = []; CurrentFiles: any;
  friendid: any; R: any;
  Transcations: any; totaltrans: any;
  FoldID: any; FileFoldID: any;
  searchvalue: any; val: any;
  public SearchEnabled: boolean = false;
  public ShowResult: boolean = false;
  SearchResult: any;
  temp: any; doc: any;
  current_url: any; displayUrl: any;
  current_url1: any;
  mail: any; inboxmsgs: any;
  MailMessage: any; frmmailpwd: any;
  mailmsg: any; usermail: any;
  FromMailID: any; FromPassword: any;
  ToMailID: any; tomail: any;
  responsemail: any; sub: any;
  alldata: any; importmailpwd: any;
  Particularusermail: any;
  videoplay: any; videodate: any;
  gridvalue: any;
  listvalue: any;
  txtUrl: any;
  files1: any;
  deleteitem: any;
  selectedDelete:any = [];
  getMoveData: any;
  getDocData: any;
  destinationFolder: any;
  sourceFolder: any;
  notify: any;
  foladdednotify: any;
  storedData: any;
  IsDOCorFolder: any;
  Hash: any;
  DocumentName: any;
  ImageType: any;
  docsize: any;
  DateCreated: any;
  CustId: any;
  FolderName: any;
  CreatedOn: any;
  Res: any;
  downpath: any;
  shareSubFolderFolderId: any;
  shareSubFolderFolderName: any;
  shareSubFolderFolderType: any;
  shareSubFolderParentID: any;
  shareSubFolderId: any;
  showper: any;
  generalprogressbar: any;
  folderCreating: any;
  Creatingmsg: any;
  createdmsg: any;
  foldercreated: any;
  statuschange: any;
  ShareOnlyDoc: any;
  BlockId: any;
  FolderID: any;
  ShareOnlyDocName: any;
  sendFID: any;
  sendBID: any;
  checkenable: any;
  multi: any;
  sfiles: any;
  sfolder: any;
  deletemulticontent: any;
  allFolders1: any;
  destinationFold: any;
  Showmoveitem: any;
  shareUniqueID: any;
  dismissalert: any;
  copied1=false;
  errormsg:any
  ppopup:any;
  allSubFolders1: any;
  folderid: any;
  DateTime: any;

  allFolders: any;
  frmData1: any;
  uploadfolderclicked: any;
  sameNames: any;
  SelectedFolderandFiles: any[]=[];
  folderlist:  any[]=[];
  sameFolderName: any[]=[];
  replaceFolderid: any[]=[];
  relaceFolderlist: any;
  SelectedFolderName: any;
  SelectedLevel: any;
  crthr: any;
  pathdt: any;
  subf1: any;
  url: any | ArrayBuffer;
  mvlfd: boolean;
  mobile=false;
  accid: any;
  frndrqst: boolean;
  userid: any;
  frndintr: any;
  role:any;
  ids: any;
  wordUrl: any;
  imgdisplay: any;
  firstName: any;
  middleName: any;
  lastName: any;
  UserId: any;
  Role: any;
  city: any;
  state: any;
  phoneNumber: any;
  address: any;
  pincode: any;
  country: any;
  IsLoggedIn: any;
  elem: any;
  document: any;
  getdata:any ;
  docdata: any;


 
  constructor(private router: ActivatedRoute,
    private route: Router, private httpService: HttpClient, 
    private modalService: NgbModal, private domSanitizer: DomSanitizer) {
      
      window.scrollTo(0,0);

      this.role = localStorage.getItem("role");

      this.mvlfd = false;
      this.ppopup = true;
      if(localStorage.getItem("copied")){
        this.copied1=true;
      }
    this.router.params.subscribe(params => {
      if (params["id"]) {
        this.GetDetails(params["id"]);
        this.GetAllFolders1();
        this.ids=params["id"];
      }
    });
    if (localStorage.getItem('IsLoggedIn') == 'true') {



      this.email = localStorage.getItem("Email")
      this.RoleID = localStorage.getItem("RoleID")
    this.userName=localStorage.getItem("UserName")
    

    this.roleName=localStorage.getItem("roleName")

      this.firstName = localStorage.getItem('firstName');
      this.middleName = localStorage.getItem('middleName');
      this.lastName = localStorage.getItem('lastName');

      this.UserId = localStorage.getItem('RegisterID');
      this.Role = localStorage.getItem('Role');

      this.city = localStorage.getItem('city');
      this.state = localStorage.getItem('state');

      this.phoneNumber = localStorage.getItem('phoneNumber');

      this.address = localStorage.getItem('address');
      this.pincode = localStorage.getItem('pincode');
      this.country = localStorage.getItem('country');
      this.email = localStorage.getItem('email');
      this.IsLoggedIn = true;
    }

    //vishal
   // this.userid = localStorage.getItem("userId");


 this.frndrqst = false;

// this.frndintr=setInterval(() => {
//   this.GetFriendDetails();

     
      
    

// }, 30000);
  }
 
  ngOnInit() {
    this.resize();
    window.addEventListener('resize', this.resize);
    this.GetFriendDetails();
    this.GetAllFolders1();
    if (this.gridvalue == "true") {
      this.gridvalue = true;
      this.listvalue = false;
    }
    else {
      this.listvalue = true;
      this.gridvalue = false;
    }
    setTimeout(() => {
      if(this.copied1){
        var moveid = document.getElementById("moveid");
        if(moveid){
          moveid.style.display = "block";
        }
        //document.getElementById("moveid").style.display = "block";
        }
    else{
      var moveid = document.getElementById("moveid");
      if(moveid){
        moveid.style.display = "none";
      }
    }
    }, 1000);

    setTimeout(() => {
      var footer = document.getElementById("footer");
      if(footer){
        footer.style.display = "none";
      }
    }, 1000);
 
  if(window.innerWidth<500){
    setTimeout(() => {
      var tree = document.getElementById("treeview");
        
        if(tree){
          tree.style.display = "none";
          
        }

        var upload = document.getElementById("view");
        
        if(upload){
          upload.style.display = "none";
          
        }
 
    }, 100);

      this.mobile=true;
    }
    setTimeout(() => {
   
    }, 6000);
  }

  //vishal
  ngOnDestroy() {
    clearInterval(this.frndintr);
  }




  addfrnd()
  {
    if(this.frndrqst == true)
    {
      this.frndrqst = false;
    }
    else{
      this.frndrqst = true;
    }
  }

  savefrienddetails() {
    
    const inputRequest = {
      Id: 0,
      FriendAccount: this.accid,
      UserId: this.userid,
      Status: 4,
      IsEnabled: true,

    }
    this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
      if (data == "SameUser") {
        alert("Please Enter your Friend MailId!!");
        
      }
      else if(data == "alreadyfriends"){
        alert("You are already friends!!");
        
      }
      else if(data == "NoUserFound"){
        alert("We are sorry "+this.accid+" is not using jobs-zone!");
      
      }
      else if(data == "SentRequest"){
        alert("You have already sent or recived request from this user!");
      
      }
      else if(data == "1"){
        alert("Friend Request Sent successfully");
      }
      else {
        alert("Something went Wrong");
        // this.route.navigate(['/allfolders']);
      }
   
      this.accid = "";
    });
  }

  mob=false;

  resize(){
    if(window.innerWidth>500){
      this.mob = true;
    }
    else{
      this.mob = false;
    }
  }
  treeviewba(){
    var tree = document.getElementById("treeview");
    if(tree){
      if(tree.style.display == "none"){
        tree.style.display = "block";
      }
      else{
        tree.style.display = "none";
      }
    }
  }
  uploadview(){
    var tree = document.getElementById("view");
    if(tree){
      if(tree.style.display == "none"){
        tree.style.display = "block";
      }
      else{
        tree.style.display = "none";
      }
    }
  }	
  GetDetails(id:any) {
    
    this.getpath(id);
    this.FileFoldID = id;
    this.httpService.get('http://localhost:44303/api/FolderandFile/Getdocument/'+id
      ).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.fileName;
      this.fid = this.allSubFolders.parentId;
      console.log("user", this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
       localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );
    });
 

  }


  getpath(id:any)
  {
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
  this.pathdt = respose;
    });
  }

  getfolders1(id1:any) {
    let id = id1.folderID;
   
      this.elem = document.getElementById(id);
      if(this.elem.childNodes.length<2)
      {

   var icn = document.getElementById(id1.id);
   if(icn!=null)
   {
    icn.setAttribute("class","fa fa-caret-down");

   }

    this.FileFoldID = id;
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.allSubFolders1 = respose;
      this.subf = this.allSubFolders1.fileName;
      this.fid = this.allSubFolders1.parentId;
      // console.log("user", this.allSubFolders1);
     // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

      var mdv1 = document.createElement("div");
for(let i=0;i<this.allSubFolders1.subFolders.length;i++)
{
    var mdv = document.createElement("div");
mdv.setAttribute("id",this.allSubFolders1.subFolders[i].folderID);
    mdv.setAttribute("style","padding-left:20px");
    var elm =document.createElement("span");
    var img = document.createElement("img");
    img.setAttribute("src","./assets/img/folder.png");
    img.setAttribute("width","30px");
    img.setAttribute("height","30px");
    var elm1 =document.createElement("span");
    elm1.innerHTML = this.allSubFolders1.subFolders[i].folderName;

    var elm12 =document.createElement("i");

    elm12.setAttribute("class","fa fa-caret-right");
    elm12.setAttribute("id",this.allSubFolders1.subFolders[i].id);

    elm12.addEventListener('click', this.getfolders1.bind(this,this.allSubFolders1.subFolders[i]));



    elm.appendChild(elm12);
    elm.appendChild(img);
    elm.appendChild(elm1);

    mdv.appendChild(elm);

    img.addEventListener('click', this.gotoFolder2.bind(this,this.allSubFolders1.subFolders[i]));
    elm1.addEventListener('click', this.gotoFolder2.bind(this,this.allSubFolders1.subFolders[i]));


    mdv1.appendChild(mdv);
}



this.elem.appendChild(mdv1);


    });


  }
  else{

    this.document.getElementById(id1.id).setAttribute("class","fa fa-caret-right");
    this.elem = document.getElementById(id);
     while(this.elem.childNodes.length>1)
     {
      this.elem.removeChild( this.elem.lastChild);
     }
  }
}

gotoFolder2(data:any)
{
  this.GetDetails(data.folderID);
  this.GetAllFolders1();
  this.folderid = data.folderID;
}

gotoFolder1(data:any)
{
    this.folderid = data.folderID;
   
}

sort = "1";

  sortby() {
    if (this.sort == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allSubFolders.subFolders.sort((a:any, b:any) => a.folderName.toLowerCase() < b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() > b.folderName.toLowerCase() ? 1 : 0)
      this.allSubFolders.retData.sort((a:any, b:any) => a.documentName.toLowerCase() < b.documentName.toLowerCase() ? -1 : a.documentName.toLowerCase() > b.documentName.toLowerCase() ? 1 : 0)

      this.sort = "2";
      
    }
    else if (this.sort == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
    
      this.allSubFolders.subFolders.sort((a:any, b:any) => a.folderName.toLowerCase() > b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() < b.folderName.toLowerCase() ? 1 : 0)
      this.allSubFolders.retData.sort((a:any, b:any) => a.documentName.toLowerCase() > b.documentName.toLowerCase() ? -1 : a.documentName.toLowerCase() < b.documentName.toLowerCase() ? 1 : 0)

      this.sort = "1";

    }

  }
sortname = "1";
  sortbydate() {
    if (this.sortname == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allSubFolders.subFolders.sort((a:any, b:any) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.allSubFolders.retData.sort((a:any, b:any) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)

      this.sortname = "2";
    }
    else if (this.sortname == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
    
      this.allSubFolders.subFolders.sort((a:any, b:any) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)
      this.allSubFolders.retData.sort((a:any, b:any) => a.date > b.date ? -1 : a.date < b.date ? 1 : 0)

      this.sortname = "1";

    }

  }
gotoallfolders()
{
  this.route.navigate(["/allfolders"]);
}


  gridview(value:any) {
    if (value == "1") {
      this.gridvalue = true;
      this.listvalue = false;
      localStorage.setItem("gridvalue", "true");
      setTimeout(() => {
        if(this.copied1){
          this.document.getElementById("moveid").style.display = "block";
          }
      else{
        this.document.getElementById("moveid").style.display = "none";
      }
      }, 500);
    
    }
    else if (value == "0") {
      this.listvalue = true;
      this.gridvalue = false;
      localStorage.setItem("gridvalue", "false");
      setTimeout(() => {
        if(this.copied1){
          this.document.getElementById("moveid").style.display = "block";
          }
      else{
        this.document.getElementById("moveid").style.display = "none";
      }
      }, 500);
    
    }
  }


  GetSubfolderdetails(data:any) {
    this.temp = data;
    this.subf = data.folderName;
    this.FileFoldID = data.folderID;
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.allSubFolders = respose;
      // this.subf = this.allSubFolders.FolderName;
      var Pid = this.allSubFolders.parentId;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));
      this.getpath(data.folderID);
      // console.log("user", this.allSubFolders);
    });
  }




  GetBack(allSubFolders:any) {
    if (this.gridvalue == true) {
      localStorage.setItem("gridvalue", "true");
    }
    else {
      localStorage.setItem("gridvalue", "false");
    }
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.Press = true;
      this.allSubFolders = respose;
      this.Pid = this.allSubFolders.parentId;
      this.FileFoldID = this.allSubFolders.parentId;
      this.allSubFolders.folderID = this.allSubFolders.parentId;
      if (this.allSubFolders.parentId == "0") {
        localStorage.setItem('formdata', JSON.stringify(this.allSubFolders));
        this.route.navigate(['/allfolders']);
      }
    });
  }


  addSubFolder(allSubFolders:any, subfoldercontent:any) {
    this.modalService.open(subfoldercontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }

  savenewSubFolder() {
    if (this.allSubFolders.subFolders.length == 0) {
      this.fl = "0";
    }
    else {
      this.fl = this.allSubFolders.subFolders[0].folderID;
    }
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    const inputRequest = {
      Id: 0,
      FolderID: this.fl,
      RoleId: this.roleid,
      FolderName: this.msg,
      UserId: this.UserId,
      Code: "SubFolder",
      ParentID: this.allSubFolders.parentId,
      Click: null,
      date:nd
    }
    this.httpService
    .post(
      'http://localhost:44303/api/FolderandFile/PostFolderMaster',inputRequest
      ).subscribe((data: any) => {
      if (data != null) {
      

        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();


      }
      else {
        alert("Something went Wrong");
        this.route.navigate(['/allfolders']);
      }
      this.msg = "";
    });
  }

  UpdateSubFolder(folderview:any, editfolder:any) {
    this.details = folderview;
    this.updatemsg = folderview.folderName;
    this.modalService.open(editfolder).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.u = this.updatemsg;
    });
  }

  UpdateSubFolderName() {
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    const inputRequest = {
      Id: this.details.id,
      FolderID: this.details.folderID,
      RoleId: this.roleid,
      FolderName: this.updatemsg,
      UserId: this.UserId,
      Code: "Folder",
      ParentID: this.details.parentID,
      Click: null,
      date:nd
    }
    this.httpService
      .post(
        'http://localhost:44303/api/FolderandFile/PostUpdateContent',inputRequest
        ).subscribe((data: any) => {
      if (data == true) {
        this.n = 100;
          this.createdmsg = "Updated Successfully";
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);
        // alert("Updated Successfully");
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

        
      }
      else {
        alert("Something went Wrong");
        this.GetDetails(this.FileFoldID);    
        this.GetAllFolders1();
  }
    });
  }

 

  GetFriendDetails() {
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.Friends = respose;
      this.frndslist = this.Friends.friendsList;
      // console.log(this.frndslist);
      var idd = this.accid;

      for(let i =0;i<this.frndslist.length;i++){
        if (idd.includes('@')) {
          if (this.frndslist[i]['email'] == this.accid) {
            for (i = 0; i < 100; i++) {
              window.clearInterval(i);
            }
            alert(this.accid + " has accepted your friend request");
            this.accid = "";
          }
        }
        if(this.frndslist[i]['friendId'] == this.uid){
          this.frndslist[i]['friendId'] = this.frndslist[i]['userId']
        }
      }
      // console.log(this.frndslist);

    });
  }

  Share() {
    this.shareitem = true;
  }
  CancelShare() {
    this.shareitem = false;
  }
  Deleteitems() {
    this.deleteitem = true;
  }
  CancelDelete() {
    this.deleteitem = false;
  }


  onChange(event: any) {
    var fileslist = "";
    var files = [].slice.call(event.target.files);

    this.files1 = [].slice.call(event.target.files);
    // console.log(this.files1);
    for (let k = 0; k < this.files1.length; k++) {
      fileslist = this.files1[k].name + ",";
    }
    this.SelectedFiles = fileslist.split(',');
  }
  
  onDrop(event: any) {

    var fileslist = "";
    var files = event;

    this.files1 = files;
    for (let k = 0; k < this.files1.length; k++) {
      if(this.files1[k].type == ""){
        alert("Please Upload only Folders")
        this.files1 = "";
      }
      fileslist = this.files1[k].name + ",";
    }
    this.SelectedFiles = fileslist.split(',');
  
  }

  Uploaddocs() {
    this.document.getElementById("cancelUpload").click();

    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Uploading File to jobs-zone...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Uploading File to jobs-zone...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    const frmData = new FormData();

    
    for (var i = 0; i < this.files1.length; i++) {
      frmData.append("fileUpload", this.files1[i]);
    }

    //frmData.append("fileUpload", this.files1);
    frmData.append("userId", this.UserId);
    frmData.append("username", this.firstName);
    frmData.append("folderid", this.ids);
    

    this.httpService.post('http://localhost:44303/api/FolderandFile/NewDocumentUpload/', frmData).subscribe(
      data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.
        this.sMsg = data as string;
        // console.log(this.sMsg);
        if (this.sMsg == 0) {
          //document.getElementById("cancelUpload").click();
          this.n = 100;
          this.createdmsg = "File Uploaded Successfully to jobs-zone";
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          
          this.SelectedFiles = null;
          this.GetDetails(this.FileFoldID);
          this.GetAllFolders1();

        }
        else {
        }
      },
      (err: HttpErrorResponse) => {
        alert("Something went wrong. Please try again..!! ")
        // console.log(err.message);    // Show error, if any.
      });
  }


  Delete(data:any) {
    var res;
    if (data.folderName == null) {
      res = confirm("Do You Want to Delete " + data.documentName + "!!!");
    }
    else {
      res = confirm("Do You Want to Delete " + data.folderName + "!!!");
    }
    if (res == true) {
      if (data.hash) {
        var info = {
          Id: data.id,
          FolderID: data.folderId,
          FolderName: data.folderName,
          UserId: this.uid,
          Code: "Document",
          ParentID: data.folderId,
          RoleId: this.roleid,
          Click: null
        };
      }
      else {
        info = data;
      }
    }
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((data: any) => {
      this.GetDetails(this.FileFoldID);
      this.GetAllFolders1();

    });
  }

  ViewDoc(aa:any, content:any) {
    this.zzz = aa;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  canceltree(){
    this.ppopup = true;
  }
  ViewDocument(aa:any, pdftesting:any) {
      
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file);
    console.log(this.pdfUrl);
    this.pdfUrl = this.zzz.file;
    // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";

    this.modalService.open(pdftesting).result.then((result) => {
     
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
      console.log(this.m)

    });
  }
  ViewDocument1(aa: any, pdftesting: any) {
    if (aa.pdfFile != null) {
      this.ViewDocs(aa);
    } else {
      this.zzz = aa.attachmentBlob;
      this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.zzz.file
      );
      console.log(this.pdfUrl);
      this.pdfUrl = this.zzz;
      this.modalService.open(pdftesting).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
    }
  }
  ViewDocumentwordd(aa:any, wordcontent:any) {
    let guid = aa.guid;
    // localStorage.setItem("guid",guid);
    // this.route.navigate(["msview"]);
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";

    this.modalService.open(wordcontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
      console.log(this.m)
    });
  }

  ViewDocumentword(aa:any, wordcontent:any) {
    let guid = aa.guid;
    // localStorage.setItem("guid",guid);
    // this.route.navigate(["msview"]);
    this.zzz = aa;
    this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    this.pdfUrl = this.zzz.file;
    this.doc = "http://docs.google.com/gview?" + this.zzz.file + "&embedded=true";

    this.modalService.open(wordcontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
      console.log(this.m)
    });
  }

  ViewxlsDoc(aa:any, xlscontent:any) {
    let guid = aa.guid;
    localStorage.setItem("guid",guid);
    this.route.navigate(["msview"]);
    // this.zzz = aa;
    // this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    // this.pdfUrl = this.zzz.file;
    // console.log(this.pdfUrl);
    // // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";

    // this.modalService.open(xlscontent).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   this.m = this.msg;
    // });
  }

  ViewPpt(aa:any, pptcontent:any) {
    let guid = aa.guid;
    localStorage.setItem("guid",guid);
    this.route.navigate(["msview"]);
    // this.zzz = aa;
    // this.current_url1 = this.domSanitizer.bypassSecurityTrustResourceUrl(this.zzz.file)
    // this.pdfUrl = this.zzz.file;
    // // this.doc="http://docs.google.com/gview?"+this.zzz.file+"&embedded=true";

    // this.modalService.open(pptcontent).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   this.m = this.msg;
    // });
  }
  open(Sharecontent:any){
    this.shareitem = true;
  
    this.selectedSelected = null;
    this.selectedSelected = this.allFolders1;
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  shareallall() {
    if (this.email == null || this.email == undefined || this.email == "") {
      alert("Please select a friend");
    }
    else {
      const inputRequest = {
        Id: this.shareUniqueID,
        ToUsers: this.email,
        USerId: this.uid,
        Code: "MainFolder",
        SelectedFolders: this.selectedSelected,
        AccessType: null,
        BodyContent: null,
        UserName: null,
        ModifiedOn: null
      }
      //
      this.showper = true;
      this.generalprogressbar = true;
      this.folderCreating = true;
      this.getPercent(this.n);
      this.Creatingmsg = "Sharing selected items...";
      this.num = setInterval(() => {
        if (this.n <= 90) {
          this.Creatingmsg = "Sharing selected items...";
          this.n = this.n + this.getPercent(this.n);
          if (this.n == 90) {
            this.n = 90;
            clearInterval(this.num);
          }
        }
      }, 3000);

      this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe(
        (data: any) => {
          if (data != null) {
            this.n = 100;
            this.createdmsg = "Shared selected items successfully!"
            this.folderCreating = false;
            this.foldercreated = true;
            clearInterval(this.num);
            // this.notify = "Folder Shared Succesfully";
            // setTimeout(() => this.dismissalert = true, 100);
            // setTimeout(function () {
            //   this.dismissalert = false;
            // }.bind(this), 3000);
            // this.spinner.hide();
            setTimeout(function (this:any) {
              this.folderCreating = false;
              this.foldercreated = false;
              this.generalprogressbar = false;
              this.errormsg = false;
              this.showper = false;
            }.bind(this), 3000);
            this.selectedSelected = [];
            this.multi = false;
          }
          else {
            //alert("Something went wrong!!please try again");
            this.notify = "Something went wrong!!please try again";
            setTimeout(() => this.dismissalert = true, 100);
            setTimeout(function (this:any) {
              this.dismissalert = false;
            }.bind(this), 3000);
         
          }
        });
    }
  }
  ViewVideo(cc:any, videocontent:any) {
    this.videoplay = cc.file
    this.videodate = cc.date
    // this.folderviewservice.viewDocument(cc).subscribe((data: any) => {
    //   this.pdfUrl = data;
    this.modalService.open(videocontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
    //});
  }
audioplay :any;
audiodate:any;
  Viewaudio(cc:any, videocontent:any) {
    this.audioplay = cc.file
    this.audiodate = cc.date
    // this.folderviewservice.viewDocument(cc).subscribe((data: any) => {
    //   this.pdfUrl = data;
    this.modalService.open(videocontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
    //});
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  toggle(data:any) {
    this.CurrentFiles = data;
    if (data != null) {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i].Id === data.Id) {
          var index = this.selected.indexOf(data);
          this.selected.splice(index, 1);
          this.remove = true;
        }
      }
      if (this.remove == false) {
        this.selected.push(data);
      }
    }
    this.remove = false;

  }

  toggleDelete(data:any) {
    this.CurrentFiles = data;
    if (data != null) {
      // for (var i = 0; i < this.selectedDelete.length; i++) {
      //   if (this.selectedDelete[i].Id == data.Id) {
      //     var index = this.selectedDelete.indexOf(data);
      //     this.selectedDelete.splice(index, 1);
          this.selectedDelete.push(data);
       // }
     // }
     
    } 

  }

  Search() {
    this.val = this.searchvalue;
    if (this.searchvalue.length != 0) {
      this.SearchEnabled = true;
    }
    else {
      this.SearchEnabled = false;
    }
    if (this.searchvalue.length > 1) {
      const inputRequest = {
        Value: this.searchvalue,
        UserId: this.uid
      }

      this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
        this.SearchResult = data;
        //alert("Deleted Successfully");
        //window.location.reload();

      });
    }
  }

  

  DeleteFile(id:any) {
    const inputRequest = {
      SelectedFiles: this.selectedDelete,
      Message:"Delete"
    }
    var result;
    if (this.selected.length != 0) {
      result = confirm( "Do You Want to Delete Selected Files !!!");
    }
    else {
      result = confirm("Do You Want to Delete Selected Files !!!");
    }
    
    if (result == true)
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((data: any) => {
        this.R = data;
        var fol = this.CurrentFiles;
       
        this.n = 100;
          this.createdmsg = "Deleted Successfully";
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

            });
    else {
      this.deleteitem = false;
    }
  }
  onSearchChange(searchValue: string) {
    
    this.val = searchValue;
    if (this.val.length == 0) {
      setTimeout(() => {
        this.document.getElementById("moveid").style.display = "none";

      }, 1000);

    }
    if (this.val.length != 0) {
      this.document.getElementById("moveid").style.display = "none";
      this.SearchEnabled = true;
    }
    else {
      this.document.getElementById("moveid").style.display = "none";
      this.SearchEnabled = false;
    }
    if (this.val.length > 1) {
      const inputRequest = {
        Fid: this.val,
        UID: this.uid
      }
      this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
        this.SearchResult = data;
        console.log(data);
        //alert("Deleted Successfully");
        //window.location.reload();

      });
    }
  }

  // folder data

  GetSubfolder(data:any) {
    if(this.SearchEnabled){
      this.SearchEnabled = false;
    }
    this.subf = data.folderName;
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.folderName;
      var Pid = this.allSubFolders.parentId;
      this.ShowResult = true;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));

      // console.log("user", this.allSubFolders);
      this.route.navigate(['allsubfolders/' + data.folderID]);
    });
  }



 


 
  MoveDash1() {
    // this.shareitem = true;
    //Folder or SubFolder Data
    this.getdata = localStorage.getItem("MoveData");
    this.getMoveData = JSON.parse( this.getdata);
    var isDOC = localStorage.getItem("IsDOCorFolder");
    //Doc Data
    var docdata = localStorage.getItem("DocData");
    this.getDocData = JSON.parse(this.docdata);
    if (isDOC == "Doc") {
      this.destinationFolder = this.FileFoldID;
      this.sourceFolder = this.getMoveData.folderID;
      const inputRequest = {
        SourceId: this.sourceFolder,
        DestinationId: this.destinationFolder
      }
      this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
        if (data == "1") {
          this.notify = "Moved Successfully";
          setTimeout(() => (this.foladdednotify1 = true), 100);
          setTimeout(
            function(this:any) {
              this.foladdednotify1 = false;
            }.bind(this),
            3000)

            this.document.getElementById("moveid").style.display = "none";
            localStorage.removeItem("copied");
          //this.notify = "Moved Successfully"
          // setTimeout(() => this.foladdednotify = true, 100);
          // setTimeout(function () {
          //   this.foladdednotify = false;
          // }.bind(this), 3000);
          this.pid = data.ParentID;
          // this.GetDetails(this.pid);
          this.GetDetails(this.FileFoldID);
          this.GetAllFolders1();


        }
        else {
          this.GetDetails(this.pid);
          this.GetAllFolders1();

          this.notify = "Something went Wrong"
          setTimeout(() => this.foladdednotify1 = true, 100);
          setTimeout(function (this:any) {
            this.foladdednotify1 = false;
          }.bind(this), 3000);
        }
      });
    } else if (isDOC == "Img") {
      const inputRequest1 = {
        AliasUid: this.getDocData.UserID,
        DId: this.FileFoldID,
        SId: this.getDocData.folderId,
        BId: this.getDocData.blockId
      }
      this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
        if (data == "1") {
          this.notify = "Moved Successfully";
          setTimeout(() => (this.foladdednotify1 = true), 100);
          setTimeout(
            function(this:any) {
              this.foladdednotify1 = false;
            }.bind(this),
            3000)

            this.document.getElementById("moveid").style.display = "none";
            localStorage.removeItem("copied");
          this.GetDetails(this.pid);
          this.GetAllFolders1();

          // setTimeout(() => {
          //   this.route.navigate(['/allfolders'])
          // },500);
        }
        else {
          this.notify = "Something went Wrong"
          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function (this:any) {
            this.foladdednotify = false;
          }.bind(this), 3000);
        }
      });
    }
  }

  MoveDash(data: any) {
    this.shareitem = true;
    this.destinationFolder = this.storedData;
    this.sourceFolder = this.getMoveData.FolderID;
    const inputRequest = {
      SourceId: this.sourceFolder,
      DestinationId: this.destinationFolder
    }
    this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe((data: any) => {
      if (data != null) {
        this.pid = data.ParentID;
        this.GetDetails(this.pid);
        this.GetAllFolders1();

        this.notify = "Moved Successfully"
        setTimeout(() => this.foladdednotify1 = true, 100);
        setTimeout(function (this:any) {
          this.foladdednotify1 = false;
        }.bind(this), 3000);
        localStorage.removeItem("copied");
      }
      else {
        this.GetDetails(this.pid);
        this.GetAllFolders1();

        this.notify = "Something went Wrong"
        setTimeout(() => this.foladdednotify1 = true, 100);
        setTimeout(function (this:any) {
          this.foladdednotify1 = false;
        }.bind(this), 3000);
      }
    });
  }
copied:any;
foladdednotify1:any;
  MoveTo(data: any, id: any) {
    //this.shareitem = true;
    this.storedData = data;
    this.IsDOCorFolder = id;
    localStorage.setItem("IsDOCorFolder", id);
    localStorage.setItem("MoveData", JSON.stringify(data));
    this.copied=1;
    localStorage.setItem("copied",this.copied);
    this.notify = "Copied to Clipboard";
                    setTimeout(() => (this.foladdednotify1 = true), 100);
                    setTimeout(
                      function(this:any) {
                        this.foladdednotify1 = false;
                      }.bind(this),
                      3000)
                      this.document.getElementById("moveid").style.display = "block";

  }

  MoveDoc(data: any, id: any) {
    localStorage.setItem("IsDOCorFolder", id);
    localStorage.setItem("DocData", JSON.stringify(data));
    this.copied=1;
    localStorage.setItem("copied",this.copied);
    this.notify = "Copied to Clipboard";
                    setTimeout(() => (this.foladdednotify1 = true), 100);
                    setTimeout(
                      function(this:any) {
                        this.foladdednotify1 = false;
                      }.bind(this),
                      3000)
                      this.document.getElementById("moveid").style.display = "block";
  }
docsize1:any;
  Details(data:any, folderdetails:any) {
    this.Hash = data.hash;
    if (this.Hash) {
      this.DocumentName = data.documentName;
      this.ImageType = data.documentType;
      this.docsize = data.documentSize;
      this.DateCreated = data.date;
      this.CustId = data.userID;
    }
    this.docsize1 =  this.formatBytes(this.docsize, 2) 
    this.FolderName = data.folderName;
    this.CreatedOn = data.createdOn;
    this.CustId = data.userId;
    //this.Type = "Folder";
    this.modalService.open(folderdetails).result.then((result) => {
      
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }

  formatBytes(bytes:any, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
   // Download Folder
   DownloadFolder(data:any) {
    const inputRequest = {
      Id: data.id,
      AUID: this.uid,
      FolderId: data.folderID,
      FolderName: data.folderName
    }
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((data: any) => {
      if (data != null) {
        this.downpath = data;
        window.open(this.downpath);
      }     
    });

  }

  cancel(){
    localStorage.removeItem("copied");
    this.document.getElementById("moveid").style.display = "none";
  }



  //subshare

  //Share 

  getPercent(per:any) {
    return 10;
  }
  ShareFolder(data:any,Sharecontent:any) {
    this.getSubFolderdata(data);
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  SharewithMoreFriends(Sharecontent:any) {
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  getSubFolderdata(data:any) {
    this.shareSubFolderFolderId = data.folderID;
    this.shareSubFolderFolderName = data.folderName;
    this.shareSubFolderFolderType = data.folderType;
    this.shareSubFolderParentID = data.parentID;
    this.shareSubFolderId = data.id;
  }
  frndslist:any=[];
  selectedFriend:any=[];
  ShareFileMembers(data:any) {
    for (let index = 0; index < this.frndslist.length; index++) {
     if (this.frndslist[index].uid == data) {
      this.selectedFriend.push(this.frndslist[index])
      break;
     }      
    }    
  }
  public n: number = 20;
num:any;
  ShareExsistingSubFolderToUsers() {
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Sharing items secured with blockchain...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Sharing items secured with blockchain...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
   
    const inputRequest = {
      Id: "0",
      ToUsers: this.selectedFriend,
      BodyContent:"",
      FolderType: this.shareSubFolderFolderType,
      FolderName: this.shareSubFolderFolderName,
      Code: "SubFolder",
      ParentID: this.shareSubFolderParentID,
      FolderID: this.shareSubFolderFolderId,
      UserId: this.uid,
      AccessType: null,
      UserName: this.userName,
      UserEmail: "",
      CreatedOn:""
    }
    //
  
    // console.log(inputRequest);
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe(
      (data: any) => {
        if(data == 100){
          alert(this.email + " is not using Jobs-zone");
          location.reload();
  
        }
        else if (data != null) {

          this.n = 100;
          this.createdmsg = "Shared items successfully"
          this.pid = data;
          this.folderCreating = false;
          this.foldercreated = true;
          clearInterval(this.num);

          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          this.GetDetails(this.shareSubFolderParentID);
          this.GetAllFolders1();

          this.selectedFriend = [];
        }
        else {
          this.notify = "Something went wrong!!please try again";
          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);

          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function (this:any) {
            this.dismissalert = false;
          }.bind(this), 3000);
          this.GetDetails(this.shareSubFolderParentID);
          this.GetAllFolders1();

          this.selectedFriend = [];
          this.accid = "";
        }
      });
  }

  ShareOnlyFile(data: any) {
    this.statuschange = "";
    this.statuschange = data;
    this.ShareOnlyDoc = data.file;
    this.BlockId = data.blockId;
    this.FolderID = data.folderId;
    this.ShareOnlyDocName = data.documentName;
   
  }

  ShareoneFile(data:any,Sharecontent:any) {
    this.ShareOnlyFile(data);
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  SharOnlyFileToUsers() {   
    this.sendFID = this.FolderID;
    this.sendBID = this.BlockId;
    const inputRequest = {
      FolderID: this.FolderID,
      File: this.ShareOnlyDoc,
      BlockID: this.BlockId,
      FromUserId: this.uid,
      ToUsers: this.email,
      DocumentName: this.ShareOnlyDocName,
      UserId: this.uid,
      AccessType: null,
      UserName: this.userName,
      BodyContent: null,
      UserEmail: null,
      CreatedOn:null
    }
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.Creatingmsg = "Sharing items secured with blockchain...";
    this.getPercent(this.n);
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Sharing items secured with blockchain...";
        this.n = this.n + this.getPercent(this.n);
      }
    }, 3000);
    this.httpService
    .get(
      'http://localhost:44303/api/Cmmon/GetAllUsers'
      ).subscribe(
      (data: any) => {
        if (data != null) {
          this.n = 100;
          this.createdmsg = "Shared item successfully within blockchain!";
          this.pid = data;
          this.GetDetails(this.sendFID);
          this.GetAllFolders1();

          this.folderCreating = false;
          this.foldercreated = true;
          this.selectedFriend = [];
          clearInterval(this.num);
          setTimeout(function (this:any) {
            this.folderCreating = false;
            this.foldercreated = false;
            this.generalprogressbar = false;
            this.errormsg = false;
            this.showper = false;
          }.bind(this), 3000);
 
          this.selectedFriend = [];
        }
        else {
          this.notify = "Something went wrong!!please try again";
          setTimeout(() => this.foladdednotify = true, 100);
          setTimeout(function (this:any) {
            this.dismissalert = false;
            this.showper = false;
          }.bind(this), 3000);
          this.selectedFriend = [];
        }
      });
  }
  // Share Ends

  // Multi Move
  selectedSelected:any=[];
  toggleSelect(data:any) {
    this.CurrentFiles = data;
    this.checkenable = true;
    this.multi = true;
    this.sfiles = 0;
    this.sfolder = 0;
    if (data != null) {
      if (this.selectedSelected.length == 0) {
        // document.getElementById(data.Id.toString()).style.backgroundColor = "#4f44c5";
        // document.getElementById(data.Id.toString()).style.color = "white";
        this.selectedSelected.push(data);
      }
      else {
        const index = this.selectedSelected.indexOf(data, 0);
        if (index > -1) {
          this.selectedSelected.splice(index, 1);
          // document.getElementById(data.Id.toString()).style.backgroundColor = "";
          // document.getElementById(data.Id.toString()).style.color = "";
        }
        else {
          this.selectedSelected.push(data);
          // document.getElementById(data.Id.toString()).style.backgroundColor = "#4f44c5";
          // document.getElementById(data.Id.toString()).style.color = "white";
        }
      }
      if (this.selectedSelected.length == 0) {
        this.checkenable = false;
        this.multi = false;
      }
    }

    for (var i = 0; i < this.selectedSelected.length; i++) {
      if (this.selectedSelected[i].folderName != null) {
        this.sfolder = this.sfolder + 1;
      }
      else {
        this.sfiles = this.sfiles + 1;
      }
    }


    if (this.sfolder == 0) {
      this.deletemulticontent = this.sfiles + " Files"
    }
    else if (this.sfiles == 0) {
      this.deletemulticontent = this.sfolder + " Folders"
    }
    else {
      this.deletemulticontent = this.sfolder + " Folders " + this.sfiles + " Files"
    }
  }

  GetAllFolders1() {
    this.httpService
      .get('http://localhost:44303/api/FolderandFile/GetallFolder/'+this.UserId).subscribe((respose: any) => {
          
      this.allFolders1 = respose;
      this.clicked();
   
    });
  }
clicked(){
  this.document.getElementById("ppup12").click();

}

  getfolders(id1:any) {
    
    let id = id1.folderID;
      this.elem = document.getElementById(id);
      if(this.elem.childNodes.length<2)
      {

   var icn = document.getElementById(id1.id);
   if(icn!=null)
   {
    icn.setAttribute("class","fa fa-caret-down");

   }

    this.FileFoldID = id;
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.fileName;
      this.fid = this.allSubFolders.parentId;
      // console.log("user", this.allSubFolders);
     // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

      var mdv1 = document.createElement("div");
for(let i=0;i<this.allSubFolders.subFolders.length;i++)
{
    var mdv = document.createElement("div");
mdv.setAttribute("id",this.allSubFolders.subFolders[i].folderID);
    mdv.setAttribute("style","padding-left:20px");
    var elm =document.createElement("span");
    var img = document.createElement("img");
    img.setAttribute("src","./assets/img/folder.png");
    img.setAttribute("width","30px");
    img.setAttribute("height","30px");
    var elm1 =document.createElement("span");
    elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

    var elm12 =document.createElement("i");

    elm12.setAttribute("class","fa fa-caret-right");
    elm12.setAttribute("id",this.allSubFolders.subFolders[i].id);

    elm12.addEventListener('click', this.getfolders.bind(this,this.allSubFolders.subFolders[i]));



    elm.appendChild(elm12);
    elm.appendChild(img);
    elm.appendChild(elm1);

    mdv.appendChild(elm);

    elm.addEventListener('click', this.gotoFolder.bind(this,this.allSubFolders.subFolders[i]));


    mdv1.appendChild(mdv);
}
this.elem.appendChild(mdv1);


    });


  }
  else{

    this.document.getElementById(id1.id).setAttribute("class","fa fa-caret-right");
    this.elem = document.getElementById(id);
     while(this.elem.childNodes.length>1)
     {
      this.elem.removeChild(this.elem.lastChild);
     }
  }
}

gotoFolder(data:any,movecontent:any)
{
  this.destinationFold = data;
}

gotoFolder12(data:any)
{
  this.folderid = data.folderID;
}

Uploaddocs1()
{
  this.UploadFolder();

}

UploadFolder() {
  this.document.getElementById("cancelUpload1").click();
  this.showper = true;
  this.generalprogressbar = true;
  this.folderCreating = true;
  this.Creatingmsg = "Uploading Folder to jobs-zone...";
  this.getPercent(this.n);
  this.num = setInterval(() => {
    if (this.n <= 90) {
      this.Creatingmsg = "Uploading Folder to jobs-zone...";
      this.n = this.n + this.getPercent(this.n);
      if (this.n == 90) {
        this.n = 90;
        clearInterval(this.num);
      }
    }
  }, 3000);
  this.DateTime = new Date().getTimezoneOffset();
 // let latest_date = this.datepipe.transform(this.DateTime, 'MM-dd-yyyy hh:mm:ss a');
  this.uploadfolderclicked = true;
  this.frmData1.append("Level", this.SelectedLevel);
  this.frmData1.append("FolderId", this.folderid);
  this.frmData1.append("FolderName", this.SelectedFolderName);
  this.frmData1.append("UserId", this.uid);
  this.frmData1.append("date", (-(this.DateTime)).toString());
 
  this.httpService.post('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/', this.frmData1).subscribe(
    //this.httpService.post('http://localhost:45320/api/UploadFolder/NewFolderUpload/', this.frmData1).subscribe(
    data => {
      if (data == 1) {
    

      }
      this.n = 100;
      this.createdmsg = "File Uploaded Successfully to jobs-zone";
      this.pid = data;
      this.folderCreating = false;
      this.foldercreated = true;
      clearInterval(this.num);

      setTimeout(function (this:any) {
        this.folderCreating = false;
        this.foldercreated = false;
        this.generalprogressbar = false;
        this.errormsg = false;
        this.showper = false;
      }.bind(this), 3000);

      
      this.SelectedFiles = null;
      this.GetDetails(this.FileFoldID);
      this.GetAllFolders1();

      this.ppopup = true;
    },
    (err: HttpErrorResponse) => {
      // console.log(err.message);
      this.ppopup = true;
      alert("Something went wrong!!! Please try again");
      this.GetDetails(this.FileFoldID);
      this.GetAllFolders1();

           // this.spinner.hide();
    });
}
cancelupload(){
  this.ppopup=true;
}
uploadhere()
{
  var uploadheres = document.getElementById("Uploadhere");
  if(this.uploadheres.style.backgroundColor=="blue"){
    this.uploadheres.style.backgroundColor = "transparent";
  }
  else{
    this.uploadheres.style.backgroundColor = "blue";
  }
    let href = window.location.href.split('/');
      let val = href[href.length-1];
      if(val != "allfolders" && val != "allsubfolders")
      {
          this.folderid = val;
      }
      else{
       this.folderid = "0";
      }
}

getfolders2(id1:any) {
  this.mvlfd = false;
  let id = id1.folderID;
    this.elem = document.getElementById(id);
    if(this.elem.childNodes.length<2)
    {

 var icn = document.getElementById(id1.id);
 if(icn!=null)
 {
  icn.setAttribute("class","fa fa-caret-down");

 }

  this.FileFoldID = id;
  this.httpService
  .get(
    'http://localhost:44303/api/Common/GetAllUsers'
    ).subscribe((respose: any) => {
    this.allSubFolders = respose;
    this.subf1 = this.allSubFolders.fileName;
    this.fid = this.allSubFolders.parentId;
    // console.log("user", this.allSubFolders);
   // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
    //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
    //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

    var mdv1 = document.createElement("div");
for(let i=0;i<this.allSubFolders.subFolders.length;i++)
{
  var mdv = document.createElement("div");
mdv.setAttribute("id",this.allSubFolders.subFolders[i].folderID);
  mdv.setAttribute("style","padding-left:20px");
  var elm =document.createElement("span");
  var img = document.createElement("img");
  img.setAttribute("src","./assets/img/folder.png");
  img.setAttribute("width","30px");
  img.setAttribute("height","30px");
  var elm1 =document.createElement("span");
  elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

  var elm12 =document.createElement("i");

  elm12.setAttribute("class","fa fa-caret-right");
  elm12.setAttribute("id",this.allSubFolders.subFolders[i].id);

  elm12.addEventListener('click', this.getfolders2.bind(this,this.allSubFolders.subFolders[i]));



  elm.appendChild(elm12);
  elm.appendChild(img);
  elm.appendChild(elm1);

  mdv.appendChild(elm);

  img.addEventListener('click', this.gotoFolder12.bind(this,this.allSubFolders.subFolders[i]));
  elm1.addEventListener('click', this.gotoFolder12.bind(this,this.allSubFolders.subFolders[i]));


  mdv1.appendChild(mdv);
}




this.elem.appendChild(mdv1);


  });


}
else{

  this.document.getElementById(id1.id).setAttribute("class","fa fa-caret-right");
  let elem = document.getElementById(id);
   while(this.elem.childNodes.length>1)
   {
    this.elem.removeChild(this.elem.lastChild);
   }
}
}



MotoselectedFolde(moveconten:any) {
  this.ppopup = false;
  this.GetAllFolders1();
 this.mvlfd = true;

 this.document.getElementById("ppup12").click();
}



  MoveMultiFolder(id:any) {
    this.document.getElementById("closemove").click();
    this.ppopup = true;
    const inputRequest = {
      SelectedFiles: this.selectedSelected,
      Message: "Delete",
      DestinationId: id.folderID,
    }
    // if (this.selectedSelected.length == 1) {
    //   this.alert = "Moved " + this.selectedSelected.length + " Item to " + id.FolderName;
    // }
    // else {
    //   this.alert = "Moved " + this.selectedSelected.length + " Items to " + id.FolderName;
    // }
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getPercent(this.n);
    this.Creatingmsg = "Moving selected items...";
    this.num = setInterval(() => {
      if (this.n <= 90) {
  
        this.Creatingmsg = "Moving selected items...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
  
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((data: any) => {
      this.Res = data;
      var fol = this.CurrentFiles;
      this.n = 100;
      this.createdmsg = "Moved items successfully!"
      this.Showmoveitem = true;
      this.folderCreating = false;
      this.checkenable = false;
      this.foldercreated = true;
      clearInterval(this.num);
      
      setTimeout(function (this:any) {
        this.folderCreating = false;
        this.foldercreated = false;
        this.generalprogressbar = false;
        this.errormsg = false;
        this.showper = false;
      }.bind(this), 3000);
      setTimeout(function (this:any) {
        this.Showmoveitem = false;
      }.bind(this), 6000);
      this.selectedSelected = [];
      this.selectedFriend= [];
      this.multi = false;
    });
  }


  DeleteMorecoin(Deletecontent:any) {
    this.modalService.open(Deletecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  Deleteselected() {
    this.showper = true;
    this.generalprogressbar = true;
    this.folderCreating = true;
    this.getPercent(this.n);
    this.Creatingmsg = "Deleting selected items";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Deleting selected items";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    const inputRequest = {
      SelectedFiles: this.selectedSelected,
      Message: "Delete",
      UserId: this.uid,
      ModifiedOn: null
    }
    // console.log(inputRequest);
    this.httpService
    .get(
      'http://localhost:44303/api/Common/GetAllUsers'
      ).subscribe((data: any) => {
      this.Res = data;
      var fol = this.CurrentFiles;
      if (data != null) {
        this.n = 100;
        this.createdmsg = "Deleted selected items successfully!"
        this.pid = data;
        this.folderCreating = false;
        this.foldercreated = true;
        setTimeout(function (this:any) {
          this.folderCreating = false;
          this.foldercreated = false;
          this.generalprogressbar = false;
          this.errormsg = false;
          this.showper = false;
        }.bind(this), 3000);        
        this.GetDetails(this.FileFoldID);
        this.GetAllFolders1();

                //this.notify = "Deleted Successfully"
        // setTimeout(() => this.foladdednotify = true, 100);
        // setTimeout(function () {
        //   this.foladdednotify = false;
        // }.bind(this), 3000);


        this.selectedSelected = [];
        this.multi = false;
        this.checkenable = false;
        setTimeout(() => {
        }, 500);
        //this.GetAllFolders();
        //this.spinner.hide();
      }
      else {
        this.checkenable = false;
        this.multi = false;
        this.notify = "Something went Wrong"
        setTimeout(() => this.foladdednotify = true, 100);
        setTimeout(function (this:any) {
          this.foladdednotify = false;
        }.bind(this), 3000);
        
        this.GetDetails(this.FileFoldID);  
        this.GetAllFolders1();
    }
    });

  }
  email:any;
  ShareExsistingMultiFolderToUsers() {

    const inputRequest = {
     Id: this.shareUniqueID,
     ToUsers: this.email,
     USerId: this.uid,
     Code: "MainFolder",
     SelectedFolders: this.selectedSelected,
     AccessType: null,
     BodyContent: null,
     UserName: this.userName,
     ModifiedOn: null
   }
   //
   this.showper = true;
   this.generalprogressbar = true;
   this.folderCreating = true;
   this.getPercent(this.n);
   this.Creatingmsg = "Sharing selected items...";
   this.num = setInterval(() => {
     if (this.n <= 90) {
       this.Creatingmsg = "Sharing selected items...";
       this.n = this.n + this.getPercent(this.n);
       if (this.n == 90) {
         this.n = 90;
         clearInterval(this.num);
       }
     }
   }, 3000);
 
   this.httpService
      .get(
        'http://localhost:44303/api/Common/GetAllUsers'
        ).subscribe(
     (data: any) => {
      if(data == 100){
        alert(this.email + " is not using Jobs-zone");
        location.reload();

      }
      else if (data != null) {
         this.n = 100;
         this.createdmsg = "Shared items successfully!"
         this.folderCreating = false;
         this.foldercreated = true;
         clearInterval(this.num);
         // this.notify = "Folder Shared Succesfully";
         // setTimeout(() => this.dismissalert = true, 100);
         // setTimeout(function () {
         //   this.dismissalert = false;
         // }.bind(this), 3000);
         // this.spinner.hide();
         setTimeout(function (this:any) {
           this.folderCreating = false;
           this.foldercreated = false;
           this.generalprogressbar = false;
           this.errormsg = false;
           this.showper = false;
         }.bind(this), 3000);
         this.selectedSelected = [];
         this.multi = false;
         this.GetDetails(this.FileFoldID);   
         this.GetAllFolders1();
        }
       else {
         //alert("Something went wrong!!please try again");
         this.notify = "Something went wrong!!please try again";
         setTimeout(() => this.dismissalert = true, 100);
         setTimeout(function (this:any) {
           this.dismissalert = false;
         }.bind(this), 3000);
       }
     });
 }

 filesPicked(files:any) {
  // this.getFoldersforCompare();
   this.frmData1 = null;
   this.sameNames = null;
   this.uploadfolderclicked = true;
   this.frmData1 = new FormData();
   for (let i = 0; i < files.length; i++) {
     this.SelectedFolderandFiles.push(files[i]);
     this.frmData1.append("fileUpload", files[i]);
   }
  //  console.log(files);
   //document.getElementById("OpenModalTreeStructure").click();
   this.uploadfolderclicked = false;
   var folname = files[0].webkitRelativePath.split('/');


   for (var i = 0; i < this.folderlist.length; i++) {
     if (this.folderlist[i].FolderName == folname[0]) {
       this.sameFolderName.push(this.folderlist[i].FolderName);
       this.replaceFolderid.push(this.folderlist[i])
       continue;
     }
   }

   if (this.sameFolderName.length != 0) {
     this.sameNames = this.sameFolderName[0];
   }

   if (this.sameNames) {
     for (let index = 0; index < this.replaceFolderid.length; index++) {
       if (index == 0) {
         this.relaceFolderlist = this.replaceFolderid[index].FolderId;
       }
       else {
         this.relaceFolderlist = this.relaceFolderlist + "," + this.replaceFolderid[index].FolderId;
       }
     }
    //  console.log(this.relaceFolderlist);
    this.document.getElementById("duplicateFolder1").click();
     //this.GetFolderandSubFolder();  
     this.frmData1.append("replaceFolderid", this.relaceFolderlist);
   }
   else {
       this.ViewVideo("folderview", "videocontent");
     this.addFriend("addfriendcontent");
  this.ppopup =false;
    var pp = document.getElementById("ppup");
  if(pp){
    pp.click();
  }
  else{
    console.log("illa");
  }
  
   }
 }

 openmodal(){
  this. document.getElementById("openm").click();
 }
 preview(files:any) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
client:any;
// savenewClient(){
//   var offset = new Date().getTimezoneOffset();
//     var nd = 0.0;
//     nd = -(parseFloat(offset.toString()));
//   if(this.client == null || this.client == undefined || this.client == ""){
//     alert("Please add your client name");
//   }
//   else{
//     
//     const inputRequest: AddNewFolder = {
//       Id: 0,
//       FolderID: "0",
//       RoleId: this.roleid,
//       FolderName: this.client,
//       UserId: this.uid,
//       Code: "Client",
//       ParentID: "0",
//       Click: null,
//       date:nd
//     }
//     this.userservice.addclient(inputRequest).subscribe((dat:any)=>{
//       if(dat == 1){
//         alert("Added your client default folders successfully in the home page");
//          }
//       else{
//         alert("Something went wrong! Please try again")
//       }
//    
//       this.msg = "";
//     });
//   }
// }
addnewFolder(folderview:any, subfoldercontent:any) {
  this.modalService.open(subfoldercontent).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;

  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    this.m = this.msg;
  });
}

ViewDocumentDoc(aa: any, docfileview: any) {
  this.zzz = aa.attachmentBlob;
  this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(
    this.zzz.file
  );
  this.wordUrl = this.zzz;
  this.modalService.open(docfileview).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
}
ViewDocumenttext(aa: any, textfileview: any) {
  this.zzz = aa.attachmentBlob;
  this.current_url = this.domSanitizer.bypassSecurityTrustResourceUrl(
    this.zzz.file
  );
  this.txtUrl = this.zzz;
  this.modalService.open(textfileview).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  });
}
ViewImageDoc(aa: any, content: any) {
  if (aa.pdfFile != null) {
    this.ViewDocs(aa);
  } else {
    this.imgdisplay = aa.file;
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.m = this.msg;
      }
    );
  }
}
ViewDocs(aa: any) {
  this.zzz = aa;
  this.m = this.msg;
}
}
