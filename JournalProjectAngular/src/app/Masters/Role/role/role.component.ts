import { Component } from '@angular/core';
import { RoleService } from 'src/app/Services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  

    role:any
    roleList: any = [];
    
    save: boolean = true;
    edit: boolean = false;
  selectedRoleID: any;
  
    constructor(private Services :RoleService ,private sub:RoleService) {
  
    }
    ngOnInit() {
      this.getrole();
    }
    saverole() {
      this.save = true;
      this.edit = false;
      var roleData = {
            RoleName:this.role
      }
      this.sub.saverole(roleData).subscribe((result: any) => {
        if (result == "success") {
          alert("Saved successfully");
          window.location.reload();
        } else {
          alert("Somthing went wrong!!!")
          window.location.reload();
  
        }
      })
    }
    getrole() {
      this.sub.getroleData().subscribe((result: any) => {
        this.roleList = result;
        console.log(this.roleList);
      })
    }
    Deleterole(id:any) {
      this.Services. Deleterole(id).subscribe((result : any )=>{
        if(result == 'success'){
          alert('Deleted successfully');
          window.location.reload();
        }else{
          alert("Somthing went wrong!!")
          window.location.reload();
        }
      })
  }
  updateRow(Data:any){
    this.save = false;
      this.edit = true;
    this.role = Data.    RoleName

    this.selectedRoleID= Data.roleID

  }
    Editrole() {
      
      var roleData = {
            RoleID: this.selectedRoleID
,
            RoleName: this.role
      }
      this.Services.Editrole(roleData).subscribe((result: any) => {
        if (result == "success") {
          alert("Updated successfully");
          window.location.reload();
        } else {
          alert("Somthing went wrong!!!")
          window.location.reload();
      }
    })
    }

}
