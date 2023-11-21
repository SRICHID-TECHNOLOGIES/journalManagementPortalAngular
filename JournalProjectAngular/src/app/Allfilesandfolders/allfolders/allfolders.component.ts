import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-allfolders',
  templateUrl: './allfolders.component.html',
  styleUrls: ['./allfolders.component.scss']
})
export class AllfoldersComponent {
  public isLoggedIn: any = false;
  uid: any;
  allFolders: any;
  allSubFolders: any;
  roleid: any;
  closeResult: any;
  msg: any; m: any; zzz: any;
  code: any;
  userid: any;
  updatemsg: any; u: any;
  details: any; subf: any;
  searchvalue: any;
  val: any;
  public SearchEnabled: any = false;
  SearchResult: any;
  pdfUrl: any;
  username: any;
  DataUSed: any;
  gridvalue: any;
  listvalue: any;
  gridclicks: any;
  listclicks: any;
  shareitem: any;
  storedData: any;
  FolderName: any;
  CreatedOn: any;
  CusId: any;
  activateMove: any;
  getMoveData: any;
  destinationFolder: any;
  sourceFolder: any;
  notify: any;
  pid: any;
  dismissalert: any;
  Res: any;
  downpath: any;
  seleteddownload: any;
  Friends: any;
  frndslist: any;
  CurrentFiles: any;
  checkenable: any;
  multi: any = false;
  sfiles: any;
  sfolder: any;
  selectedSelected: any = [];
  deletemulticontent: any;
  showper: any;
  generalprogressbar: any;
  folderCreating: any;
  Creatingmsg: any;
  public n: number = 20;
  num: any
  createdmsg: any;
  foldercreated: any;
  selectedFriend: any = [];
  Press: any;
  allFolders1: any;
  FileFoldID: any;
  fid: any;
  destinationFold: any;
  Showmoveitem: any;
  shareId: any;
  shareFName: any;
  sharePID: any;
  shareUniqueID: any;
  R: any;
  mobile = false;
  subf1: any;
  ppopup: any;
  allSubFolders1: any;
  folderid: any;
  DateTime: any;
  copied1 = false;

  frmData1: any;
  uploadfolderclicked: any;
  sameNames: any;
  SelectedFolderandFiles: any[] = [];
  folderlist: any[] = [];
  sameFolderName: any[] = [];
  replaceFolderid: any[] = [];
  relaceFolderlist: any;
  SelectedFolderName: any;
  SelectedLevel: any;
  crthr: any;
  pathdt: any;

  frndrqst: any;
  accid: any;
  role: any;
  UserService:any
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
  document:any;RoleID:any;
  userName: any;
  roleName:any;
  userId: any;
;
  elem:any;
  getdata:any
  constructor(private httpService: HttpClient, private router: Router,  private modalService: NgbModal,) {
    this.role = localStorage.getItem("role");
    window.scrollTo(0,0);

    this.userid = localStorage.getItem("userId");


    this.frndrqst = false;

 

    if (localStorage['loadingpage'] == "true") {
      localStorage['loadingpage'] = false;
      location.reload();
    }
    
    this.ppopup = true;
    if (localStorage.getItem("copied") == "1") {
      this.copied1 = true;
    }
    else {
    }
    if (localStorage.getItem('IsLoggedIn') == 'true') {

      this.email = localStorage.getItem("Email")
      this.RoleID = localStorage.getItem("RoleID")
    this.userName=localStorage.getItem("UserName")
    

    this.roleName=localStorage.getItem("roleName")
this.userId=localStorage.getItem("userId")
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

  }
  mob = false;

  resize() {
    if (window.innerWidth > 500) {
      this.mob = true;
    }
    else {
      this.mob = false;
    }
  }
  ngOnInit() {

    this.resize();
    window.addEventListener('resize', this.resize);
    this.GetAllFolders();
    // this.GetDataUsed();
    this.GetAllFolders1();
    //localStorage.setItem("gridvalue", "true");
    //this.listvalue = false;
    //this.gridvalue = true;
    //localStorage.setItem("gridvalue", "true");
    if (this.gridvalue == true || this.gridvalue == "true") {
      this.gridvalue = true;
      this.listvalue = false;
    }
    else {
      this.listvalue = true;
      this.gridvalue = false;
    }
    this.shareitem = true;
    this.activateMove = false;
    setTimeout((document:any) => {
      if (this.copied1) {
        if (this.document.getElementById("moveid")) {
          this.document.getElementById("moveid").style.display = "block";
        }
      }
      else {
        if (this.document.getElementById("moveid")) {

          this.document.getElementById("moveid").style.display = "none";
        }
      }
    }, 1000);
    setTimeout(() => {
      var footer = document.getElementById("footer");
      if (footer) {
        footer.style.display = "none";
      }
    }, 1000);
    if (window.innerWidth < 500) {
      setTimeout(() => {
        var tree = document.getElementById("treeview");

        if (tree) {
          tree.style.display = "none";

        }


        var upload = document.getElementById("view");

        if (upload) {
          upload.style.display = "none";

        }


      }, 1000);
      this.mobile = true;
    }
    setTimeout(() => {
 
    }, 6000);
  }


  treeviewba() {
    var tree = document.getElementById("treeview");
    if (tree) {
      if (tree.style.display == "none") {
        tree.style.display = "block";
      }
      else {
        tree.style.display = "none";
      }
    }
  }
  uploadview() {
    var tree = document.getElementById("view");
    if (tree) {
      if (tree.style.display == "none") {
        tree.style.display = "block";
      }
      else {
        tree.style.display = "none";
      }
    }
  }
  gridview(value:any) {
    if (value == "1") {
      this.gridvalue = true;
      this.listvalue = false;
      localStorage.setItem("gridvalue", "true");
      setTimeout((document:any) => {
        if (this.copied1) {
          this.document.getElementById("moveid").style.display = "block";
        }
        else {
          this.document.getElementById("moveid").style.display = "none";
        }
      }, 500);
    }
    else if (value == "0") {
      this.listvalue = true;
      this.gridvalue = false;
      localStorage.setItem("gridvalue", "false");
      setTimeout((document:any) => {
        if (this.copied1) {
          this.document.getElementById("moveid").style.display = "block";
        }
        else {
          this. document.getElementById("moveid").style.display = "none";
        }
      }, 500);

    }
  }
  sort = "1";

  sortby() {
    if (this.sort == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allFolders.sort((a:any, b:any) => a.folderName.toLowerCase() < b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() > b.folderName.toLowerCase() ? 1 : 0)
      this.sort = "2";
    }
    else if (this.sort == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });

      this.allFolders.sort((a:any, b:any) => a.folderName.toLowerCase() > b.folderName.toLowerCase() ? -1 : a.folderName.toLowerCase() < b.folderName.toLowerCase() ? 1 : 0)

      this.sort = "1";

    }

  }
  sortname = "1";
  sortbydate() {
    if (this.sortname == "1") {
      // this.userservice.getfoldersbydate(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });
      this.allFolders.sort((a:any, b:any) => a.createdOn < b.createdOn ? -1 : a.createdOn > b.createdOn ? 1 : 0)
      this.sortname = "2";
    }
    else if (this.sortname == "2") {
      // this.userservice.getfoldersbyname(this.uid).subscribe((respose: any) => {
      //   this.allFolders = respose;
      // });

      this.allFolders.sort((a:any, b:any) => a.createdOn > b.createdOn ? -1 : a.createdOn < b.createdOn ? 1 : 0)

      this.sortname = "1";

    }

  }
  addnewFolder(folderview:any, subfoldercontent:any) {
    this.modalService.open(subfoldercontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }

  savenewFolder() {
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString()));
    const inputRequest = {
      Id: 0,
      FolderID: "0",
      RoleId: this.roleid,
      FolderName: this.msg,
      UserId: this.UserId,
      Code: "Folder",
      ParentID: "0",
      Click: null,
      date: nd
    }
    this.httpService.post('http://localhost:44303/api/FolderandFile/PostFolderMaster/',inputRequest).subscribe((data: any) => {
      if (data != null) {

        this.GetAllFolders();
        this.GetAllFolders1();
      }
      else {
        alert("Something went Wrong");

      }
      this.msg = "";
    });
  }





  addfrnd() {
    if (this.frndrqst == true) {
      this.frndrqst = false;
    }
    else {
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
    localStorage['accid'] = this.accid;
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      if (data == "SameUser") {
        alert("Please Enter your Friend MailId!!");

      }
      else if (data == "alreadyfriends") {
        alert("You are already friends!!");

      }
      else if (data == "NoUserFound") {
        alert("We are sorry " + this.accid + " is not using jobs-zone!");

      }
      else if (data == "SentRequest") {
        alert("You have already sent or recived request from this user!");

      }
      else if (data == "1") {
        alert("Friend Request Sent successfully");
      }
      else {
        alert("Something went Wrong");
        // this.route.navigate(['/allfolders']);
      }
 
      this.accid = "";
    });
  }




  UpdateFolder(folderview:any, editfolder:any) {
    this.updatemsg = folderview.folderName;
    this.details = folderview;
    this.modalService.open(editfolder).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.u = this.updatemsg;
    });
  }

  UpdateFolderName() {
    var offset = new Date().getTimezoneOffset();
    var nd = 0.0;
    nd = -(parseFloat(offset.toString())); const inputRequest = {
      Id: this.details.id,
      FolderID: this.details.folderID,
      RoleId: this.roleid,
      FolderName: this.updatemsg,
      UserId: this.uid,
      Code: "Folder",
      ParentID: this.details.parentID,
      Click: null,
      date: nd
    }
    this.httpService.post('http://localhost:44303/api/FolderandFile/PostUpdateContent/',inputRequest).subscribe((data: any) => {
      if (data == true) {
        this.GetAllFolders();
        this.GetAllFolders1();
      }
      else {
        alert("Something went wrong!");
        window.location.reload();
      }
    });
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

  GetSubfolder(data:any) {
    this.subf = data.folderName;
    this.httpService.get('http://localhost:44303/api/FolderandFile/Getdocument/'+this.subf).subscribe((respose: any) => {
      this.allSubFolders = respose;
      this.subf = this.allSubFolders.folderName;
      var Pid = this.allSubFolders.parentId;
      //localStorage.setItem(this.allSubFolders);
      localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
      localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
      localStorage.setItem('parentid', JSON.stringify(this.allSubFolders.parentId));
      // console.log("user", this.allSubFolders);
      this.router.navigate(['allsubfolders/' + data.folderID]);
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
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
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.GetAllFolders();
      this.GetAllFolders1();
    });
  }


  onSearchChange(searchValue: string) {
    
    this.val = searchValue;
    if (this.val.length == 0) {
      setTimeout((document:any) => {
        document.getElementById("moveid").style.display = "none";

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
      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
        this.SearchResult = data;
        console.log(data);
        //alert("Deleted Successfully");
        //window.location.reload();

      });
    }
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

  ViewDocument(bb:any, pdfcontent:any) {
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.pdfUrl = data;
      this.modalService.open(pdfcontent).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.m = this.msg;
      });
    });
  }

  ViewxlsDoc(bb:any, xlscontent:any) {
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.pdfUrl = data;
      this.modalService.open(xlscontent).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.m = this.msg;
      });
    });
  }

  ViewPpt(bb:any, pptcontent:any) {
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.pdfUrl = data;
      this.modalService.open(pptcontent).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.m = this.msg;
      });
    });
  }


  ViewVideo(cc:any, videocontent:any) {
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.pdfUrl = data;
      this.modalService.open(videocontent).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.m = this.msg;
      });
    });
  }
  percentage: any;
  storage: any;
  GetDataUsed() {
    const inputRequest = {
      UserId: this.uid,
      Accountid: null
    };
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((respose: any) => {
      this.DataUSed = respose;
      this.storage = +localStorage['storage'];
      var data = this.DataUSed.substring(0, this.DataUSed.length - 2);
      var intdata = parseInt(data);
      this.percentage = (intdata * 100) / (+this.storage * 1024 * 1024);

      // console.log(this.percentage);
      this.document.getElementById("progressbar").style.width = this.percentage + "%";

    });
  }

  // Details(data: any) {
  //   this.FolderName = data.folderName;
  //   this.CreatedOn = data.createdOn;
  //   this.CusId = data.userId;
  //   //this.Type = "Folder";
  //   this.showfolderdetails(data,folderdetails)
  // }

  showfolderdetails(folderview:any, folderdetails:any) {
    this.FolderName = folderview.folderName;
    this.CreatedOn = folderview.createdOn;
    this.CusId = folderview.userId;
    this.modalService.open(folderdetails).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }


  GetAllFolders() {
    
    this.httpService.get('http://localhost:44303/api/FolderandFile/GetallFolder/'+this.UserId).subscribe((respose: any) => {
      this.allFolders = respose;
      // console.log("user", this.allFolders)
    });
  }
  foladdednotify = false;
  // Move 
  MoveTo(data: any, id: any) {
    // this.ppopup = false;
   
    this.activateMove = true;
    // this.moveitem = "true";
    // this.Enablemove = true
    this.storedData = data;
    this.copied = 1;
    this.copied1 = true;
    localStorage.setItem("IsDOCorFolder", id);
    localStorage.setItem("MoveData", JSON.stringify(data));
    localStorage.setItem("copied", this.copied);
    this.notify = "Copied to Clipboard";
    setTimeout(() => (this.foladdednotify = true), 100);
    setTimeout(
      function (this:any) {
        this.foladdednotify = false;
      }.bind(this),
      3000)

    this.document.getElementById("moveid").style.display = "block";


  }
  copied: any;
  MoveDash1() {
    this.shareitem = true;
    this.getdata = localStorage.getItem("MoveData");
    this.getMoveData = JSON.parse(this.getdata);
    // this.moveitem = "true";
    // this.Enablemove = true;
    this.destinationFolder = 0;
    this.sourceFolder = this.getMoveData.folderID;
    const inputRequest = {
      SourceId: this.sourceFolder,
      DestinationId: this.destinationFolder
    }
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      if (data != null) {
        this.pid = data.ParentID;
        this.GetAllFolders();
        this.GetAllFolders1();
        this.notify = "Moved Successfully"
        setTimeout(() => this.foladdednotify = true, 100);
        setTimeout(function (this:any) {
          this.foladdednotify = false;
        }.bind(this), 3000);
        localStorage.removeItem("copied");
      }
      else {
        this.GetAllFolders();
        this.GetAllFolders1();


      }
    });
  }




  // Download Folder
  DownloadFolder(data:any) {
    const inputRequest = {
      Id: data.id,
      AUID: this.uid,
      FolderId: data.folderID,
      FolderName: data.folderName
    }
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      if (data != null) {
        this.downpath = data;
        this.seleteddownload = true;
        window.open(this.downpath);
      }

      else {
        this.notify = "Something Went Wrong. Try again.!!"
        setTimeout(() => this.dismissalert = true, 100);
        setTimeout(function (this:any) {
          this.dismissalert = false;
        }.bind(this), 3000);
        // this.spinner.hide();
      }
    });

  }

  cancel() {
    localStorage.removeItem("copied");
    this.document.getElementById("moveid").style.display = "none";
  }

  // ALL Muti Functions Starts

  GetFriendDetails() {
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((respose: any) => {

      this.Friends = respose;
      this.frndslist = this.Friends.friendsList;
      var idd = this.accid;
      
      for (let i = 0; i < this.frndslist.length; i++) {
        if (idd.includes('@')) {
          if (this.frndslist[i]['email'] == this.accid) {
            for (i = 0; i < 100; i++) {
              window.clearInterval(i);
            }
            alert(this.accid + " has accepted your friend request");
            this.accid = "";
          }
        }
        if (this.frndslist[i]['friendId'] == this.uid) {
          
          this.frndslist[i]['friendId'] = this.frndslist[i]['userId']
        }
      }
    });
  }

  getPercent(per:any) {
    return 10;
  }

  toggleSelect(data:any) {
    this.CurrentFiles = data;
    this.checkenable = true;
    this.multi = true;
    this.sfiles = 0;
    this.sfolder = 0;
    if (data != null) {
      if (this.selectedSelected.length == 0) {
        this.selectedSelected.push(data);
      }
      else {
        const index = this.selectedSelected.indexOf(data, 0);
        if (index > -1) {
          this.selectedSelected.splice(index, 1);
        }
        else {
          this.selectedSelected.push(data);
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

  //Multi Delete
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
    this.Creatingmsg = "Deleting selected items...";
    this.num = setInterval(() => {
      if (this.n <= 90) {
        this.Creatingmsg = "Deleting selected items...";
        this.n = this.n + this.getPercent(this.n);
        if (this.n == 90) {
          this.n = 90;
          clearInterval(this.num);
        }
      }
    }, 3000);
    const inputRequest= {
      SelectedFiles: this.selectedSelected,
      Message: "Delete",
      UserId: this.uid,
      ModifiedOn: null
    }
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
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
        //this.notify = "Deleted Successfully"
        // setTimeout(() => this.foladdednotify = true, 100);
        // setTimeout(function () {
        //   this.foladdednotify = false;
        // }.bind(this), 3000);


        this.selectedSelected = [];
        this.multi = false;
        this.checkenable = false;
        this.GetAllFolders();
        this.GetAllFolders1();
        this.GetDataUsed();
        setTimeout(() => {
        }, 500);
        //this.GetAllFolders();
        //this.spinner.hide();
      }
      else {
        this.GetAllFolders();
        this.GetAllFolders1();
        this.checkenable = false;
        this.multi = false;
        this.notify = "Something went Wrong"
        setTimeout(() => this.foladdednotify = true, 100);
        setTimeout(function (this:any) {
          this.foladdednotify = false;
        }.bind(this), 3000);
      }
    });

  }


  //Multi Share

  SharewithMoreFriends(Sharecontent:any) {
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }

  ShareFileMembers(data:any) {
    for (let index = 0; index < this.frndslist.length; index++) {
      if (this.frndslist[index].uid == data) {
        this.selectedFriend.push(this.frndslist[index])
        break;
      }
    }
  }


email:any;
  ShareFile() {
    
    const inputRequest = {
      SelectedFiles: this.selectedSelected,
      FriendList: this.selectedFriend,
      UserId: this.uid,
      Message: "share"
    }
    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.R = data;
      var fol = this.CurrentFiles;
      if (fol.hash) {
        var info = {
          Id: fol.id,
          FolderID: fol.folderId,
          // FolderName: this.folder.FolderName,
          UserId: this.uid,
          Code: "Document",
          ParentID: fol.folderId,
          RoleId: this.roleid,
          Click: this.Press
        };
      }


      alert("File Sent");
      this.GetAllFolders();
      this.GetAllFolders1();

    });

  }


  GetAllFolders1() {
    this.httpService
      .get('http://localhost:44303/api/FolderandFile/GetallFolder/'+this.UserId).subscribe((respose: any) => {
          
      this.allFolders1 = respose;
   
    });
  }


  getfolders(id1:any) {

    let id = id1.folderID;
    this.elem = document.getElementById(id);
    if (this.elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((respose: any) => {
        this.allSubFolders = respose;
        this.subf = this.allSubFolders.fileName;
        this.fid = this.allSubFolders.parentId;
        // console.log("user", this.allSubFolders);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px;");
          var elm = document.createElement("span");
          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");


          elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;
          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders.bind(this, this.allSubFolders.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          elm.addEventListener('click', this.gotoFolder.bind(this, this.allSubFolders.subFolders[i]));


          mdv1.appendChild(mdv);
        }
        setTimeout(() => {
          this.elem.appendChild(mdv1);

        }, 1000);


      });


    }
    else {

      this.document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      this.elem = document.getElementById(id);
      while (this.elem.childNodes.length > 1) {
        this.elem.removeChild(this.elem.lastChild);
      }
    }
  }

  gotoFolder(data:any, movecontent:any) {
    this.destinationFold = data;
  }

  gotoFolder12(data:any) {
    this.folderid = data.folderID;
  }
  MotoselectedFolde(movecontent:any) {
    this.ppopup = false;
    this.document.getElementById("ppup12").click();
    this.GetAllFolders1();

  }

  canceltree() {
    this.ppopup = true;
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

    this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((data: any) => {
      this.Res = data;
      var fol = this.CurrentFiles;
      this.n = 100;
      this.createdmsg = "Moved selected items successfully!"
      this.Showmoveitem = true;
      this.folderCreating = false;
      this.checkenable = false;
      this.foldercreated = true;
      clearInterval(this.num);
      this.ppopup = true;
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
      this.multi = false;
      this.GetAllFolders();
      this.GetAllFolders1();
    });
  }


  // ALL Muti Functions Ends

  sharetoToUsers(data:any) {
    this.shareId = data.folderID;
    this.shareFName = data.folderName;
    this.sharePID = data.parentID;
    this.shareUniqueID = data.id;
  }
  ShareFolder(data:any, Sharecontent:any) {
    this.sharetoToUsers(data);
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }

  ShareExsistingFolderToUsersForm() {
    if (this.email == null || this.email == undefined || this.email == "") {
      alert("Please select a friend");
    }
    else {
      const inputRequest = {
        Id: this.shareUniqueID,
        ToUsers: this.email,
        BodyContent: null,
        FolderType: "2",
        FolderName: this.shareFName,
        Code: "Folder",
        ParentID: this.sharePID,
        FolderID: this.shareId,
        UserId: this.uid,
        AccessType: null,
        UserName: null,
        UserEmail: null,
        CreatedOn: null
      }
      //
      this.showper = true;
      this.generalprogressbar = true;
      this.folderCreating = true;
      this.Creatingmsg = "Sharing selected items...";
      this.getPercent(this.n);
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

      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe(
        (data: any) => {
          if(data == 100){
            alert(this.email + " is not using Jobs-zone");
            location.reload();
          }
          else if (data != null) {
            this.n = 100;
            this.createdmsg = "Shared selected items successfully!"
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

            this.GetAllFolders();
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
          this.selectedFriend = [];
          this.accid = "";
        });
    }
  }

  ShareExsistingMultiFolderToUsers() {
    if (this.selectedFriend == null || this.selectedFriend == undefined || this.selectedFriend == "") {
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
        UserName: this.username,
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

      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe(
        (data: any) => {
          if(data == 100){
            alert(this.email + " is not using Jobs-zone");
            location.reload();

          }
          else if (data != null) {
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
            this.GetAllFolders();
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



  // gotoFolder(data)
  // {

  //  this.folderid = data.folderID;
  // }

  cancelupload() {
    this.ppopup = true;
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
    //
    //  this.showper = true;
    //  this.generalprogressbar = true;
    //    this.folderCreating = true;
    //   this.getPercent(this.n);
    //   this.Creatingmsg = "Uploading Folder...";
    // this.num = setInterval(() => {
    //   if (this.n <= 90) {
    //     this.Creatingmsg = "Uploading Folder...";
    //     this.n = this.n + this.getPercent(this.n);
    //     if (this.n == 90) {
    //       this.n = 90;
    //       clearInterval(this.num);
    //     }
    //   }
    // }, 3000);
    this.httpService.post('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/', this.frmData1).subscribe(
      //this.httpService.post('http://localhost:45320/api/UploadFolder/NewFolderUpload/', this.frmData1).subscribe(
      data => {
        if (data == 1) {
          //   this.uploadfolderclicked = false;
          //   this.n = 100;
          //   this.createdmsg = "Folder Uploaded Successfully"
          //   this.folderCreating = false;
          //   this.foldercreated = true;
          //   clearInterval(this.num);
          //   this.GetAllFolders();
          // //  this.GetDataUsed();
          //   setTimeout(function () {
          //     this.folderCreating = false;
          //     this.foldercreated = false;
          //     this.generalprogressbar = false;
          //     this.errormsg = false;
          //     this.showper = false;
          //  }.bind(this), 3000);
        }

        //this.spinner.hide();
        // this.notify = "Folder Uploaded Successfully!!";
        // setTimeout(() => this.dismissalert = true, 100);
        // setTimeout(function () {
        //   this.dismissalert = false;
        // }.bind(this), 3000);
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



        this.GetAllFolders();
        this.GetAllFolders1();

        this.ppopup = true;
      },
      (err: HttpErrorResponse) => {
        // console.log(err.message);
        this.ppopup = true;
        alert("Something went wrong! Try again!!!")     // this.spinner.hide();
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
        UserName: this.username,
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

      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe(
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
  open(Sharecontent:any){
    this.selectedSelected = null;
    this.selectedSelected = this.allFolders;
    this.GetFriendDetails();
    this.modalService.open(Sharecontent).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.m = this.msg;
    });
  }
  gotoFolder1(data:any) {
    this.folderid = data.folderID;

  }

  Uploaddocs1() {
    this.UploadFolder();

  }

  uploadhere() {

    let href = window.location.href.split('/');
    let val = href[href.length - 1];
    if (val != "allfolders" && val != "allsubfolders") {
      this.folderid = val;
    }
    else {
      this.folderid = "0";
    }
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
    console.log(files);
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
      //  this.ViewVideo("folderview", "videocontent");
      //   this.addFriend("addfriendcontent");
      this.ppopup = false;

      // this.modalService.open("uploadfolder").result.then((result) => {
      //   this.closeResult = `Closed with: ${result}`;

      // }, (reason) => {
      //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //   this.m = this.msg;
      // });
      this.document.getElementById("ppup").click();
    }
  }





  getfolders1(id1:any) {
    let id = id1.folderID;
    this.elem = document.getElementById(id);
    if (this.elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((respose: any) => {
        this.allSubFolders = respose;
        this.subf1 = this.allSubFolders.fileName;
        this.fid = this.allSubFolders.parentId;
        // console.log("user", this.allSubFolders);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px;color:white;cursor:pointer;white-space: nowrap;width: auto;overflow: hidden;text-overflow: ellipsis;cursor: pointer;");
          var elm = document.createElement("span");

          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");

          elm1.title = this.allSubFolders.subFolders[i].folderName;
          elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders1.bind(this, this.allSubFolders.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          img.addEventListener('click', this.gotoFolder.bind(this, this.allSubFolders.subFolders[i], "Movetofold"));
          elm1.addEventListener('click', this.gotoFolder.bind(this, this.allSubFolders.subFolders[i], "Movetofold"));


          mdv1.appendChild(mdv);
        }





        this.elem.appendChild(mdv1);


      });


    }
    else {

      this.document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      this.elem = document.getElementById(id);
      while (this.elem.childNodes.length > 1) {
        this.elem.removeChild(this.elem.lastChild);
      }
    }
  }





  getfolders2(id1:any) {
    let id = id1.folderID;
    this.elem = document.getElementById(id);
    if (this.elem.childNodes.length < 2) {

      var icn = document.getElementById(id1.id);
      if (icn != null) {
        icn.setAttribute("class", "fa fa-caret-down");

      }

      this.FileFoldID = id;
      this.httpService.get('http://localhost:44303/api/UploadFolder/NewAllFolderUpload/').subscribe((respose: any) => {
        this.allSubFolders = respose;
        this.subf1 = this.allSubFolders.fileName;
        this.fid = this.allSubFolders.parentId;
        // console.log("user", this.allSubFolders);
        // localStorage.setItem('retdata', JSON.stringify(this.allSubFolders.retData));
        //localStorage.setItem('subfolders', JSON.stringify(this.allSubFolders.subFolders));
        //  localStorage.setItem('parentid',JSON.stringify(this.allSubFolders.ParentId) );

        var mdv1 = document.createElement("div");
        for (let i = 0; i < this.allSubFolders.subFolders.length; i++) {
          var mdv = document.createElement("div");
          mdv.setAttribute("id", this.allSubFolders.subFolders[i].folderID);
          mdv.setAttribute("style", "padding-left:20px");
          var elm = document.createElement("span");
          var img = document.createElement("img");
          img.setAttribute("src", "./assets/img/folder.png");
          img.setAttribute("width", "30px");
          img.setAttribute("height", "30px");
          var elm1 = document.createElement("span");
          elm1.innerHTML = this.allSubFolders.subFolders[i].folderName;

          var elm12 = document.createElement("i");

          elm12.setAttribute("class", "fa fa-caret-right");
          elm12.setAttribute("id", this.allSubFolders.subFolders[i].id);

          elm12.addEventListener('click', this.getfolders1.bind(this, this.allSubFolders.subFolders[i]));



          elm.appendChild(elm12);
          elm.appendChild(img);  
          elm.appendChild(elm1);

          mdv.appendChild(elm);

          img.addEventListener('click', this.gotoFolder12.bind(this, this.allSubFolders.subFolders[i]));
          elm1.addEventListener('click', this.gotoFolder12.bind(this, this.allSubFolders.subFolders[i]));


          mdv1.appendChild(mdv);
        }





        this.elem.appendChild(mdv1);


      });


    }
    else {

      this.document.getElementById(id1.id).setAttribute("class", "fa fa-caret-right");
      this.elem = document.getElementById(id);
      while (this.elem.childNodes.length > 1) {
        this.elem.removeChild(this.elem.lastChild);
      }
    }
  }
  client: any;
  // savenewClient() {
  //   var offset = new Date().getTimezoneOffset();
  //   var nd = 0.0;
  //   nd = -(parseFloat(offset.toString()));
  //   if (this.client == null || this.client == undefined || this.client == "") {
  //     alert("Please add your client name");
  //   }
  //   else {
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
  //       date: nd
  //     }
  //     this.userservice.addclient(inputRequest).subscribe((dat: any) => {
  //       if (dat == 1) {
  //         alert("Added your client default folders successfully");
  //         this.GetAllFolders();
  //         this.GetAllFolders1();
  //       }
  //       else {
  //         alert("Something went wrong! Please try again")
  //       }
  //  
  //       this.msg = "";
  //     });
  //   }
  // }
}
