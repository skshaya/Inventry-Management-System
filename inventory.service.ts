
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Inventory } from './inventory';
@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  url = 'http://localhost:64674/Api/Inventory';
  constructor(private http: HttpClient) { }

  getAllItem(): Observable<Inventory[]> {
 return this.http.get<Inventory[]>(this.url + '/AllInventoryDetails');  
}

  getItemById(inventoryID: string): Observable<Inventory> {
    return this.http.get<Inventory>(this.url + '/GetInventoryDetailsById/' + inventoryID);
  }
  createItem(inventory: Inventory): Observable<Inventory> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Inventory>(this.url + '/InsertInventoryDetails/', inventory, httpOptions);
  }

  updateItem(inventory: Inventory): Observable<Inventory> {
    // inventory.UnitPrice="10";
    console.log("Update Check",inventory);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Inventory>(this.url + '/UpdateInventoryDetails/',inventory, httpOptions);
  }

  deleteItemById(inventoryID: string): Observable<number> {
    console.log("delete ID Check",inventoryID);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteInventoryDetails/'+ inventoryID, httpOptions);
  }

}
