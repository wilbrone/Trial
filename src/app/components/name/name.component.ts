import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
	
	  	person:Person;
	  	name:any;

	template: Person[] = [ 
	  	{name:'Wilbrone', age:24},
	  	{name:'George', age:30},
	  	{name:'Nancy', age:20},
	  	{name:'Mercy', age:33},
	  	{name:'Cleave', age:40},
  	 ]

  displayedColumns = ['name', 'age'];
  dataSource = new MatTableDataSource<Person>(this.template);

  constructor(private router: Router, public dialog: MatDialog) {}

  onSelect(name:any){
  	this.router.navigate(['/detail',name]);
  }

  openDialog(name): void {

  	console.log(name)

    let dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '250px',
      data: { name: name }


    });
    		

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

  ngOnInit() {
  	this.dataSource = new MatTableDataSource<Person>(this.template);
  }

}


export class Person{
	public name: string;
	public age: number;
}




@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './dialog-overview.html',
})  
export class DialogOverviewDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
