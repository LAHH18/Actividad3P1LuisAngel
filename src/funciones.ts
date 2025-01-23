function calculate(operation: string): void {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    let resultado: string | number=0;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, ingrese números válidos.";
    } else {
        if (operation === "suma") {
            resultado = num1 + num2;
        } else if (operation === "resta") {
            resultado = num1 - num2;
        } else if (operation === "multiplicacion") {
            resultado = num1 * num2;
        } else if (operation === "division") {
            resultado = num2 !== 0 ? num1 / num2 : "Error matemático";
        }
    }

    document.getElementById("resultado")!.innerText = `Resultado: ${resultado}`;
}
