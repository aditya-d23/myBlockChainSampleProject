async function main() {
    const EllipticCurve = await ethers.getContractFactory("EllipticCurve");
    const EllipticCurve_ = await EllipticCurve.deploy();
    console.log("Contract Deployed to Address:", EllipticCurve_);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });