let abi_person = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"identificationPerson","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dateCreate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"email","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newMail","type":"string"}],"name":"changeEmail","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_addressPerson","type":"address"},{"indexed":false,"name":"_newEmail","type":"string"}],"name":"LogUpdateEmail","type":"event"}];
let bin_person = '608060405234801561001057600080fd5b5060405161080a38038061080a83398101806040528101908080518201929190602001805182019291905050508160039080519060200190610053929190610102565b50806004908051906020019061006a929190610102565b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600181905550424301600281905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101a7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014357805160ff1916838001178555610171565b82800160010185558215610171579182015b82811115610170578251825591602001919060010190610155565b5b50905061017e9190610182565b5090565b6101a491905b808211156101a0576000816000905550600101610188565b5090565b90565b610654806101b66000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461007d5780636b8315101461010d5780636fd9935814610138578063820e93f5146101635780638da5cb5b146101f3578063d553357d1461024a575b600080fd5b34801561008957600080fd5b506100926102b3565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100d25780820151818401526020810190506100b7565b50505050905090810190601f1680156100ff5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561011957600080fd5b50610122610351565b6040518082815260200191505060405180910390f35b34801561014457600080fd5b5061014d610357565b6040518082815260200191505060405180910390f35b34801561016f57600080fd5b5061017861035d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101b857808201518184015260208101905061019d565b50505050905090810190601f1680156101e55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101ff57600080fd5b506102086103fb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025657600080fd5b506102b1600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610420565b005b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103495780601f1061031e57610100808354040283529160200191610349565b820191906000526020600020905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60025481565b60015481565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561047b57600080fd5b8060049080519060200190610491929190610583565b507fa79e0bb5b2e79f7ddeca9530b41e5b4cca973196b9c0c73537101a3d8560d79f306004604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156105715780601f1061054657610100808354040283529160200191610571565b820191906000526020600020905b81548152906001019060200180831161055457829003601f168201915b5050935050505060405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105c457805160ff19168380011785556105f2565b828001600101855582156105f2579182015b828111156105f15782518255916020019190600101906105d6565b5b5090506105ff9190610603565b5090565b61062591905b80821115610621576000816000905550600101610609565b5090565b905600a165627a7a72305820e8f45fbe9d8742e9b9adb929464979d87766f17d3a0414696a2071446c77fb6c0029';

/**
 * Create Person
 */
$( "#btnCreatePerson" ).click(function() {
    let _name = $('#name').val();
    let _email = $('#email').val();
    let personContract = web3.eth.contract(abi_person);
    let person = personContract.new([_name, _email],
       {
         from: $('#account').val(), 
         data: '0x'+bin_person, 
         gas: '4700000'
       });
    console.info(person.address);
    $('#resultTransaction').val('Contract mined! address: ' + person.address + ' transactionHash: ' + person.transactionHash);
    
    return;
});

function getInstancePerson() {
    let PersonContract = web3.eth.contract(abi_person);
    let personInstance = PersonContract.at($('#addressContract').val());
    return personInstance;
}

/**
 * Consultar pessoa
 */
$( "#btnGetPerson" ).click(function() {
    let personInstance = getInstancePerson();
    personInstance.name.call({},web3.eth.defaultBlock, function(error,result){
        if (error) {
            console.info(error);
        } else {
            $('#lblName').text(result);
        }
    });

    let lblIdentificationPerson = personInstance.identificationPerson();
    $('#lblIdentificationPerson').text(lblIdentificationPerson);

    personInstance.email(function(error,result){
        if (error) {
            console.info(error);
        } else {        
            $('#lblEmail').text(result);
        }
    });   

    personInstance.email(function(error,result){
        if (error) {
            console.info(error);
        } else {        
            $('#lblEmail').text(result);
        }
    });    
     
    personInstance.owner(function(error,result){
        if (error) {
            console.info(error);
        } else {        
            $('#lblOwner').text(result);
        }
    });   

    return;
});

/**
 * Update Person
 */
$( "#btnUpdateEmail" ).click(function() {
    let personInstance = getInstancePerson();
    let _newEmail = $('#newEmail').val();

    var txn = {
        from: $('#account').val(),
        gas: 470000
    }

    personInstance.changeEmail.sendTransaction(_newEmail, txn, function(error, result)  {
        if (error) {
            console.info(error);
        } else {
            console.info(result);
        }
        startEvent(personInstance);        
    });
});


//event.stopWatching();
function startEvent(personInstance) {

    var personEvent = personInstance.LogUpdateEmail();
    personEvent.watch(function(error, result){
        if (!error)
            {
                $("#labelResultEvent").html("novo email (" + result.args._newEmail + ") alterado pela conta (" + result.args._addressPerson +" )");
            } else {
                console.log(error);
            }
    });  
}