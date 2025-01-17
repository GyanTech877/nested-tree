import React from 'react';
import {TreeList} from './components/TreeList';
import {Util} from './util/util';
import './style/App.css'

const data = {
  "status": true,
  "responseData": {
    "source": "AGROSTAR",
    "children": [
      {
        "source": "INHOUSE",
        "children": [
          {
            "source": "APP",
            "children": [
              {
                "source": "APPRJ",
                "children": []
              }, {
                "source": "APPGJ",
                "children": []
              }, {
                "source": "APPMH",
                "children": []
              }, {
                "source": "APPMP",
                "children": []
              }, {
                "source": "APPHR",
                "children": []
              }, {
                "source": "APPAP",
                "children": []
              }, {
                "source": "APPAR",
                "children": []
              }, {
                "source": "APPAS",
                "children": []
              }, {
                "source": "APPBR",
                "children": []
              }, {
                "source": "APPCG",
                "children": []
              }, {
                "source": "APPGA",
                "children": []
              }, {
                "source": "APPHP",
                "children": []
              }, {
                "source": "APPJK",
                "children": []
              }, {
                "source": "APPJH",
                "children": []
              }, {
                "source": "APPKA",
                "children": []
              }, {
                "source": "APPKL",
                "children": []
              }, {
                "source": "APPMN",
                "children": []
              }, {
                "source": "APPML",
                "children": []
              }, {
                "source": "APPMZ",
                "children": []
              }, {
                "source": "APPNL",
                "children": []
              }, {
                "source": "APPOR",
                "children": []
              }, {
                "source": "APPPB",
                "children": []
              }, {
                "source": "APPSK",
                "children": []
              }, {
                "source": "APPUK",
                "children": []
              }, {
                "source": "APPUP",
                "children": []
              }, {
                "source": "APPWB",
                "children": []
              }, {
                "source": "APPTN",
                "children": []
              }, {
                "source": "APPTR",
                "children": []
              }, {
                "source": "APPAN",
                "children": []
              }, {
                "source": "APPCH",
                "children": []
              }, {
                "source": "APPDH",
                "children": []
              }, {
                "source": "APPDD",
                "children": []
              }, {
                "source": "APPDL",
                "children": []
              }, {
                "source": "APPLD",
                "children": []
              }, {
                "source": "APPPY",
                "children": []
              }, {
                "source": "APPTL",
                "children": []
              }
            ]
          }, {
            "source": "CSR",
            "children": [
              {
                "source": "CSRRJ",
                "children": []
              }, {
                "source": "CSRMH",
                "children": []
              }, {
                "source": "CSRGJ",
                "children": []
              }, {
                "source": "CSRMP",
                "children": []
              }, {
                "source": "CSRAP",
                "children": []
              }, {
                "source": "CSROR",
                "children": []
              }, {
                "source": "CSRBR",
                "children": []
              }
            ]
          }, {
            "source": "WEB",
            "children": []
          }, {
            "source": "FO",
            "children": [
              {
                "source": "FOGJ",
                "children": []
              }, {
                "source": "FOMH",
                "children": []
              }, {
                "source": "FORJ",
                "children": []
              }, {
                "source": "FO_OTHERS",
                "children": []
              }
            ]
          }, {
            "source": "APP-Credit",
            "children": []
          }, {
            "source": "CREDIT",
            "children": [
              {
                "source": "CREDIT_APP",
                "children": []
              }, {
                "source": "CREDIT_WEB",
                "children": []
              }
            ]
          }
        ]
      }, {
        "source": "IFFCO",
        "children": [
          {
            "source": "IFFCOGJ",
            "children": []
          }, {
            "source": "IFFCOMH",
            "children": []
          }, {
            "source": "IFFCORJ",
            "children": []
          }, {
            "source": "IFFCOMP",
            "children": []
          }, {
            "source": "IFFCOHR",
            "children": []
          }
        ]
      }, {
        "source": "TATA",
        "children": []
      }, {
        "source": "MAHINDRA",
        "children": []
      }, {
        "source": "BPCL",
        "children": [
          {
            "source": "BPCLRJ",
            "children": [
              {
                "source": "BPCL-RJ-JAIPUR",
                "children": [
                  {
                    "source": "BPCL-RJ-JAIPUR-01",
                    "children": []
                  }, {
                    "source": "BPCL-RJ-JAIPUR-02",
                    "children": []
                  }, {
                    "source": "BPCL-RJ-JAIPUR-03",
                    "children": []
                  }
                ]
              }, {
                "source": "BPCL-RJ-SIKAR",
                "children": [
                  {
                    "source": "BPCL-RJ-SIKAR-01",
                    "children": []
                  }
                ]
              }
            ]
          }, {
            "source": "BPCLMH",
            "children": [
              {
                "source": "BPCL-MH-NASIK",
                "children": [
                  {
                    "source": "BPCL-MH-NASIK-01",
                    "children": []
                  }, {
                    "source": "BPCL-MH-NASIK-02",
                    "children": []
                  }, {
                    "source": "BPCL-MH-NASIK-03",
                    "children": []
                  }, {
                    "source": "BPCL-MH-NASIK-04",
                    "children": []
                  }, {
                    "source": "BPCL-MH-NASIK-05",
                    "children": []
                  }
                ]
              }, {
                "source": "BPCL-MH-AHMEDNAGAR",
                "children": [
                  {
                    "source": "BPCL-MH-AHMEDNAGAR-01",
                    "children": []
                  }, {
                    "source": "BPCL-MH-AHMEDNAGAR-02",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      }, {
        "source": "LP",
        "children": [
          {
            "source": "LPGJ",
            "children": []
          }, {
            "source": "LPMH",
            "children": []
          }, {
            "source": "LPRJ",
            "children": []
          }, {
            "source": "LP_OTHERS",
            "children": []
          }
        ]
      }, {
        "source": "SHOPTIMIZE_WEB",
        "children": []
      }, {
        "source": "FULLERTON",
        "children": [
          {
            "source": "FULLERTON-GJ",
            "children": []
          }, {
            "source": "FULLERTON-MH",
            "children": []
          }, {
            "source": "FULLERTON-RJ",
            "children": []
          }, {
            "source": "FULLERTON-MP",
            "children": []
          }, {
            "source": "FULLERTON-KA",
            "children": []
          }, {
            "source": "FULLERTON-HR",
            "children": []
          }, {
            "source": "FULLERTON-OD",
            "children": []
          }, {
            "source": "FULLERTON-BH",
            "children": []
          }, {
            "source": "FULLERTON-WB",
            "children": []
          }
        ]
      }, {
        "source": "SURE",
        "children": []
      }, {
        "source": "ABHIRAM-MARKETING",
        "children": []
      }, {
        "source": "PAHAL-FINANCE",
        "children": []
      }, {
        "source": "BAIF",
        "children": []
      }, {
        "source": "KRUSHIDHAN",
        "children": []
      }, {
        "source": "FR",
        "children": [
          {
            "source": "FRMH",
            "children": []
          }, {
            "source": "FRGJ",
            "children": []
          }, {
            "source": "FRRJ",
            "children": []
          }
        ]
      }, {
        "source": "EXTERNAL-PARTNER",
        "children": [
          {
            "source": "HARIHARESHWA",
            "children": [
              {
                "source": "HARIHARESHWA-MH",
                "children": []
              }, {
                "source": "HARIHARESHWA-GJ",
                "children": []
              }, {
                "source": "HARIHARESHWA-RJ",
                "children": []
              }
            ]
          }
        ]
      }, {
        "source": "INSTITUTIONAL-SALES",
        "children": [
          {
            "source": "AGROW",
            "children": [
              {
                "source": "AGROW-MH",
                "children": []
              }, {
                "source": "AGROW-GJ",
                "children": []
              }, {
                "source": "AGROW-RJ",
                "children": []
              }
            ]
          }, {
            "source": "NANDIGRAM",
            "children": [
              {
                "source": "NANDIGRAM-MH",
                "children": []
              }, {
                "source": "NANDIGRAM-GJ",
                "children": []
              }, {
                "source": "NANDIGRAM-RJ",
                "children": []
              }
            ]
          }, {
            "source": "KRUSHISHAKTI",
            "children": [
              {
                "source": "KRUSHISHAKTI-MH",
                "children": []
              }, {
                "source": "KRUSHISHAKTI-OR",
                "children": []
              }
            ]
          }, {
            "source": "AGROWBOOK",
            "children": [
              {
                "source": "AGROWBOOK-MH",
                "children": []
              }
            ]
          }, {
            "source": "BFIL",
            "children": [
              {
                "source": "BFIL-MH",
                "children": []
              }, {
                "source": "BFIL-GJ",
                "children": []
              }, {
                "source": "BFIL-RJ",
                "children": []
              }
            ]
          }, {
            "source": "ASHIRVAD",
            "children": []
          }, {
            "source": "B2B",
            "children": []
          }
        ]
      }
    ]
  },
  "message": "OK"
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodeData: new Util().getFlattenNodes(data.responseData)
    }
  }

  render() {
    return (
      <div className="app-container">
        <TreeList data={data.responseData} nodeData={this.state.nodeData}/>
      </div>
    );
  }
}

export default App;
