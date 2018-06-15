import { Component, OnInit, Input } from '@angular/core';
import { DynamicTableColumn } from '../../model/dynamic-form/dynamic-table-column';
import { MatFormField } from '@angular/material';
import { SearchComparer, DataType, SearchOperand } from 'tlahui-webapi-client';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table-field-search',
  templateUrl: './dynamic-table-field-search.component.html',
  styleUrls: ['./dynamic-table-field-search.component.scss']
})
export class DynamicTableFieldSearchComponent implements OnInit {
  
  @Input() SearchField: DynamicTableColumn;
  private selectedValue: string;
    private Field: DynamicTableColumn;
  private Operators: Array<SearchComparer>
  public dataType = DataType;
  public Search: SearchOperand;
  private searchForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.searchForm = fb.group({
      Comparer: new FormControl(),
      Negation: null,
      Value1: new FormControl(),
      Value2: new FormControl(),
    });

   }

  ngOnInit() {




    this.Field=this.SearchField;
    this.SetOperands();
      this.selectedValue="0";
      this.Search = new SearchOperand();
      this.Search.FromUIColumn(this.SearchField);
  }

  
  public GetSearch() : SearchOperand{
    this.Search.Comparer = SearchComparer.none;
    this.Search.Value1 =  this.searchForm.get("Value1");
    this.Search.Value2 =  this.searchForm.get("Value2");
    this.Search.Negation = false;
    return this.Search;
  }



  private GetOperandText(c: SearchComparer): string{
    switch(c){
        case SearchComparer.between: 
        return "Entre";

        case SearchComparer.contains: 
        return "Contiene";

        case SearchComparer.ends: 
        return "Termina";

        case SearchComparer.eq: 
        return "Igual";

        case SearchComparer.gt: 
        return "Mayor a";

        case SearchComparer.gte: 
        return "Mayor igual a";

        case SearchComparer.in: 
        return "En la lista";

        case SearchComparer.lt: 
        return "Menor a";

        case SearchComparer.lte: 
        return "Menor igual a";

        case SearchComparer.starts: 
        return "Comienza con";

        case SearchComparer.none:
        return "Ignorar";

      default:
          return "????";  

    }

  }

  // Establece los opeadores válidos de cuaerdo al tipo de campo  
  private SetOperands() {

    this.Operators = [];
    this.Operators.push(SearchComparer.none)
    
    switch (this.SearchField.Type) {

      case DataType.boolean: {
        this.Operators.push(SearchComparer.eq);
        break;
      }

      case DataType.date: {
        this.Operators.push(SearchComparer.eq);
        this.Operators.push(SearchComparer.lt);
        this.Operators.push(SearchComparer.lte);
        this.Operators.push(SearchComparer.gt);
        this.Operators.push(SearchComparer.gte);
        this.Operators.push(SearchComparer.between);
        break;
      }

      case DataType.datetime: {
        this.Operators.push(SearchComparer.lt);
        this.Operators.push(SearchComparer.lte);
        this.Operators.push(SearchComparer.gt);
        this.Operators.push(SearchComparer.gte);
        this.Operators.push(SearchComparer.between);
        break;
      }

      case DataType.decimal_number: {
        this.Operators.push(SearchComparer.eq);
        this.Operators.push(SearchComparer.lt);
        this.Operators.push(SearchComparer.lte);
        this.Operators.push(SearchComparer.gt);
        this.Operators.push(SearchComparer.gte);
        this.Operators.push(SearchComparer.between);
        break;
      }

      case DataType.integer_number: {
        this.Operators.push(SearchComparer.eq);
        this.Operators.push(SearchComparer.lt);
        this.Operators.push(SearchComparer.lte);
        this.Operators.push(SearchComparer.gt);
        this.Operators.push(SearchComparer.gte);
        this.Operators.push(SearchComparer.between);
        break;
      }


      case DataType.text: {
        this.Operators.push(SearchComparer.eq);
        this.Operators.push(SearchComparer.contains);
        this.Operators.push(SearchComparer.starts);
        this.Operators.push(SearchComparer.ends);
        this.Operators.push(SearchComparer.in);
        break;
      }

      case DataType.time: {
        this.Operators.push(SearchComparer.lt);
        this.Operators.push(SearchComparer.lte);
        this.Operators.push(SearchComparer.gt);
        this.Operators.push(SearchComparer.gte);
        this.Operators.push(SearchComparer.between);
        break;
      }

    }

  }

}
