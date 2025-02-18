import {Base45Decoder, DccBase45} from "../../../src";
import {ZlibDecoder} from "../../../src";
import {CborDecoder} from "../../../src";
import {CoseDecoder} from "../../../src";
import {DccCose} from "../../../src/model/DccCose";
import {VaccinationCertificate} from "../../../src/model/eudcc-hcert/VaccinationCertifiacte";
import {TestCertificate} from "../../../src/model/eudcc-hcert/TestCertifiacte";
import {RecoveryCertificate} from "../../../src/model/eudcc-hcert/RecoveryCertificate";

export const validVaccinationCert = "HC1:NCFK60DG0/3WUWGSLKH47GO0Y%5S.PK%96L79CK-500XK0JCV496F3PYJ-982F3:OR2B8Y50.FK6ZK7:EDOLOPCO8F6%E3.DA%EOPC1G72A6YM86G7/F6/G80X6H%6946746T%6C46/96SF60R6FN8UPC0JCZ69FVCPD0LVC6JD846Y96C463W5307+EDG8F3I80/D6$CBECSUER:C2$NS346$C2%E9VC- CSUE145GB8JA5B$D% D3IA4W5646646-96:96.JCP9EJY8L/5M/5546.96SF63KC.SC4KCD3DX47B46IL6646H*6Z/ER2DD46JH8946JPCT3E5JDLA7$Q69464W51S6..DX%DZJC2/DYOA$$E5$C JC3/D9Z95LEZED1ECW.C8WE2OA3ZAGY8MPCG/DU2DRB8MTA8+9$PC5$CUZC$$5Y$5FBB*10GBH A81QK UV-$SOGD1APAB4$5UV C-EWB4T*6H%QV/DAP9L7J3Y4O/WVI5IW3672HO-HV16IW3JHV-FI%WJCPBI8QTE008I+FPR01MYFA6EBN2SR3H+4KH1M9RCIM2 VV15REG 516N93SS70RBUCH-RJM2JMULZ6*/HBBW7W7:S2BU7T6PRTMF4ALUNEXH3P7 LE0YF0TGE461PBK9TD68HDIT4AIFD9NH14V%GBCONJOV$KN  C+3U-IT$SE-A2V+9UO9WYRJ4HN+M/Z5W$QEDT/8C:88OQ4DXOBBIQ453863NPW0EJXG8$GH1T 38C*UI6T /FCDC%6VLNOA6W6BEYJJUH2Z-SOJO1D7JMALD8 $1%5B.GH$7AQOHZ:K3BNO1"
export const validTestCert = "HC1:NCFR606G0/3WUWGSLKH47GO0Y%5S.PK%96L79CK3600XK0JCV496F3RYJPGL2F31PRVHLY50.FK6ZKZWEDOLOPCO8F6%E3.DA%EOPC1G72A6YM8KG7FM8/A8.Q6X%61R6157//60S8P46%A8V%6B56UPC0JCZ69+EDG8F3I80/D6$CBECSUER:C2$NS346$C2%E9VC- CSUE145GB8JA5B$DE8C9/D:OC:M83KCZPCNF6OF63W59%6VF6.SA W66461G73564KCPPC5UA QEKPCG/D5$C4KCD3DX47B46IL6646H*6KWEKDDC%6-Q6QW66464KCAWE6T9G%6G%67W5JPCT3E5JDLA7$Q69464W51S6..DX%DZJC2/D/IANPCIEC JC3/DMP8$ILZEDZ CW.C8WEBIAYM8TB8MPCG/DY-CAY81C9XY8O/EZKEZ967L6256V50A4AS0OHO5TXA03EE-Q39S5.QSJI*7BZ/7EI7L4WF42F*O:-K*21 YHPHEKSN/Q6IPIR1QKWTX0OJUN-785VGJD0+1FX6NSYJV31 -MBI7PRDP3O9.F16I$JP9VM*AW4W3B%EBRT6HH4YV:/4UEO*EOIJ4KKR6%IX-47Y64R78Y3J REZN:$S/Q4P.H*AT75V:0O+G4$/E/EIE*JX32P-FMKE%59KL0/FJ*6WTVPGREF*FR8N$WIIGT4:N8YJG:HQSVQE0XJA6TLSG47$ONOO-+8 OH8K3UDJ$34Z7PIYL3LCTYAIU2VU9ZC8%C60GH$:8F5S5V5GRSAO3N%NDRR4NN/NN-7B5BEI-QWUH*ZHZ%9J3ONR32VF/I1P3RJKEPT62-CCYR"
export const validRecoveryCert = "HC1:NCF 50.G0/3WUWGSLKH47GO0Y%5S.PK%96L78CKR7U*70YM8FN0GWC MCWY0/AC9%VD97TK0F90GECQHGWJC0FDL:4:KEPH7M/ESDD746KG7+59V*8H:6TL6657-R8RM8AL6W*8SX8457UW6QW6WJCT3EYM8XJCS.CNF6OF63W59%6%96XJC/$ENF6OF64W5Y96UF6ZJC+KENF6OF63W59%6746%JC+QE$.32%E6VCHQEU$DE44NXOBJE719$QE0/D+8D-ED.24-G8$:84KCD3DX47B46IL6646I*6GVC*JC1A6G%63W56L6-96TPCBEC7ZKW.CI C14EPQE JC2/DB190%EMEDLPCG/DI CC1A NAMPCG/D%-C8C9:S9:B8O/EZKEZ967L6256V50N:HS3M*AUM.0R:3O Q-RBKL9PGCK+J1KV9W9KRB1:827NW0E5/0Q HL*M VI END26KPA-/NBSBXX1NCCKHN7+23478K5I9L.-72U06SJ/89PT9OGM1/0CZUU4JYNM/O39LK3.N1JQHU7+Z3SOP0/A3JUTKPVC73UTM%ECV1+CQSUT--8EJH4ZOM-N$*SOC3-NB2GJJ-69YL 59V3G$ 4%Y4Z6R.9PFWGP$TGWHHK61N757O JJS 58DJ69984MEA41YGTXAB.CTPG-+RDHLVQBEWPFVK%L90+JCW1F30PL7ZOQ% QCRRPYJXYAA.M.*D HJ H985E$4QA915SJEPQZ*J.6HATCDF16IARXM3FG0QE2N2C%7E%FXADONSY*R7S33IQ"


const decodeDcc = (cert: string): DccCose => CborDecoder.decode(ZlibDecoder.decode(Base45Decoder.decode(new DccBase45(cert))))

describe("Test the cose dcoder", () => {
    test("Should decode a valid vaccination certificate", () => {
        const dccCose = decodeDcc(validVaccinationCert)
        const hcert = CoseDecoder.decode(dccCose)

        expect(hcert instanceof VaccinationCertificate).toBe(true)

        expect(hcert.schemaVersion).toBe("1.3.0")
        expect(hcert.person.familyName).toBe("Studer")
        expect(hcert.person.familyNameStandardised).toBe("STUDER")
        expect(hcert.person.givenName).toBe("Martina")
        expect(hcert.person.givenNameStandardised).toBe("MARTINA")
        expect(hcert.person.dateOfBirth).toBe("1964-03-14")

        if (hcert instanceof VaccinationCertificate) {
            expect(hcert.infromation.disease.active).toBe(true)
            expect(hcert.infromation.disease.lang).toBe('en')
            expect(hcert.infromation.disease.display).toBe('COVID-19')
            expect(hcert.infromation.disease.system).toBe('http://snomed.info/sct')
            expect(hcert.infromation.disease.version).toBe('http://snomed.info/sct/900000000000207008/version/20210131')

            expect(hcert.infromation.vaccineOrProphylaxis.active).toBe(true)
            expect(hcert.infromation.vaccineOrProphylaxis.lang).toBe('en')
            expect(hcert.infromation.vaccineOrProphylaxis.display).toBe('covid-19 vaccines')
            expect(hcert.infromation.vaccineOrProphylaxis.system).toBe('http://snomed.info/sct')
            expect(hcert.infromation.vaccineOrProphylaxis.version).toBe('http://snomed.info/sct/900000000000207008/version/20210131')

            expect(hcert.infromation.vaccineProduct.active).toBe(true)
            expect(hcert.infromation.vaccineProduct.lang).toBe('en')
            expect(hcert.infromation.vaccineProduct.display).toBe('COVID-19 Vaccine Janssen')
            expect(hcert.infromation.vaccineProduct.system).toBe('https://ec.europa.eu/health/documents/community-register/html/')
            expect(hcert.infromation.vaccineProduct.version).toBe('')

            expect(hcert.infromation.vaccineManufacturer.active).toBe(true)
            expect(hcert.infromation.vaccineManufacturer.lang).toBe('en')
            expect(hcert.infromation.vaccineManufacturer.display).toBe('Janssen-Cilag International')
            expect(hcert.infromation.vaccineManufacturer.system).toBe('https://spor.ema.europa.eu/v1/organisations')
            expect(hcert.infromation.vaccineManufacturer.version).toBe('')

            expect(hcert.infromation.doseNumber).toBe(2)
            expect(hcert.infromation.overallDoseNumber).toBe(2)

            expect(hcert.infromation.vaccinationDate).toBe("2021-06-07")
            expect(hcert.infromation.vaccinationCountry).toBe("Switzerland")

            expect(hcert.infromation.certificateIssuer).toBe("Bundesamt für Gesundheit (BAG)")
            expect(hcert.infromation.uniqueCertificateIdentifier).toBe("urn:uvci:01:CH:52DBC5C6503016A06162545C")
        }
    })

    test("Should decode a valid test certificate", () => {
        const dccCose = decodeDcc(validTestCert)
        const testCert = CoseDecoder.decode(dccCose)

        expect(testCert instanceof TestCertificate).toBe(true)

        expect(testCert.schemaVersion).toBe("1.3.0")
        expect(testCert.person.familyName).toBe("Rochat")
        expect(testCert.person.familyNameStandardised).toBe("ROCHAT")
        expect(testCert.person.givenName).toBe("Céline")
        expect(testCert.person.givenNameStandardised).toBe("CELINE")
        expect(testCert.person.dateOfBirth).toBe("1964-03-14")

        if (testCert instanceof TestCertificate) {
            expect(testCert.infromation.disease.active).toBe(true)
            expect(testCert.infromation.disease.lang).toBe('en')
            expect(testCert.infromation.disease.display).toBe('COVID-19')
            expect(testCert.infromation.disease.system).toBe('http://snomed.info/sct')
            expect(testCert.infromation.disease.version).toBe('http://snomed.info/sct/900000000000207008/version/20210131')

            expect(testCert.infromation.testType.active).toBe(true)
            expect(testCert.infromation.testType.lang).toBe('en')
            expect(testCert.infromation.testType.display).toBe('Nucleic acid amplification with probe detection')
            expect(testCert.infromation.testType.system).toBe('http://loinc.org')
            expect(testCert.infromation.testType.version).toBe('2.69')

            expect(testCert.infromation.testName).toBe('PCR')
            expect(testCert.infromation.testDevice).toBe(undefined) // todo test with an RAT test

            expect(testCert.infromation.testDate).toStrictEqual(new Date("2021-06-28T05:00:00.000Z"))

            expect(testCert.infromation.testResult.active).toBe(true)
            expect(testCert.infromation.testResult.lang).toBe('en')
            expect(testCert.infromation.testResult.display).toBe('Not detected')
            expect(testCert.infromation.testResult.system).toBe('http://snomed.info/sct')
            expect(testCert.infromation.testResult.version).toBe('http://snomed.info/sct/900000000000207008/version/20210131')

            expect(testCert.infromation.testingCentre).toBe("Testcenter")
            expect(testCert.infromation.testingCountry).toBe("Switzerland")
            expect(testCert.infromation.certificateIssuer).toBe("Bundesamt für Gesundheit (BAG)")
            expect(testCert.infromation.uniqueCertificateIdentifier).toBe("urn:uvci:01:CH:CC5A5426E468A70D40CA06C0")

        }
    })

    test("Should decode a valid recovery certificate", () => {
        const dccCose = decodeDcc(validRecoveryCert)
        const recoveryCert = CoseDecoder.decode(dccCose)

        expect( recoveryCert instanceof RecoveryCertificate).toBe(true)

        expect( recoveryCert.schemaVersion).toBe("1.3.0")
        expect( recoveryCert.person.familyName).toBe("Rossi")
        expect( recoveryCert.person.familyNameStandardised).toBe("ROSSI")
        expect( recoveryCert.person.givenName).toBe("Giulia")
        expect( recoveryCert.person.givenNameStandardised).toBe("GIULIA")
        expect( recoveryCert.person.dateOfBirth).toBe("1964-03-14")

        if ( recoveryCert instanceof RecoveryCertificate) {
            expect( recoveryCert.infromation.disease.active).toBe(true)
            expect( recoveryCert.infromation.disease.lang).toBe('en')
            expect( recoveryCert.infromation.disease.display).toBe('COVID-19')
            expect( recoveryCert.infromation.disease.system).toBe('http://snomed.info/sct')
            expect( recoveryCert.infromation.disease.version).toBe('http://snomed.info/sct/900000000000207008/version/20210131')

            expect( recoveryCert.infromation.firstPositiveTestDate).toBe("2021-06-01")
            expect( recoveryCert.infromation.testingCountry).toBe("Switzerland")

            expect( recoveryCert.infromation.certificateIssuer).toBe("Bundesamt für Gesundheit (BAG)")
            expect( recoveryCert.infromation.certificateValidFrom).toBe("2021-06-11")
            expect( recoveryCert.infromation.certificateValidUntil).toBe("2021-11-27")

            expect( recoveryCert.infromation.uniqueCertificateIdentifier).toBe("urn:uvci:01:CH:FB7C3D8FD0CA31FCE18D5450")

        }
    })

})
