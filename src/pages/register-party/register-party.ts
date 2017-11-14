import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'page-register-party',
  templateUrl: 'register-party.html'
})

export class RegisterPartyPage {

  private partyData : FormGroup

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private formBuilder: FormBuilder
  ) {

    this.partyData = this.formBuilder.group({
      name: ['', Validators.required],
      day: ['',  Validators.required],
      hour: ['',  Validators.required]
    })

  }

  registerParty(){
    console.log(this.partyData.value)
  }

  ngOnInit() {
    this.openScanner()
  }

  openScanner() {

    this.barcodeScanner.scan()
      .then((barcodeData) => {
        console.log(barcodeData)
      })
      .catch((err) => {
        console.log(err)
      })

  }

}


