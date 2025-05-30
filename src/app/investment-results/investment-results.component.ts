import { Component, computed, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<...>()

  private InvestmentService = inject(InvestmentService);
  
  results = computed( ()=> this.InvestmentService.resultData());    
  
}
