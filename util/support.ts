
  
export function validateMessage(txtToValidate: string,txtFromElement: string) {
   expect(txtFromElement.toString().includes(txtToValidate));
}
   

           