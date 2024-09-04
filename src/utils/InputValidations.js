
export const name_validation = {
    name: 'title',
    label: 'Title',
    type: 'text',
    id: 'title',
    placeholder: 'Short sleeve t-shirt',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 50,
        message: 'Max 50 characters',
      },
    },
}
export const status_validation = {
    name: 'status',
    label: 'Status',
    type: 'text',
    id: 'status',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'required',
      }
    },
  }
export const ptype_validation = {
    name: 'type',
    label: 'Product Type',
    type: 'text',
    id: 'type',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'required',
      }
    },
}
export const catagory_validation = {
    name: 'catagory',
    label: 'Product Catagory',
    type: 'text',
    id: 'catagory',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'required',
      }
    },
}
  
  export const desc_validation = {
    name: 'description',
    label: 'Description',
    multiline: true,
    id: 'description',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
    },
  }
  
  export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a random email address',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
    },
  }


// variant form validation

export const price_validation = {
  name: 'pnum',
  label: 'Price',
  type: 'number',
  id: 'pnum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const profit_validation = {
  name: 'prnum',
  label: 'Profit',
  type: 'number',
  id: 'prnum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const margin_validation = {
  name: 'mnum',
  label: 'Margin',
  type: 'number',
  id: 'mnum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const cost_validation = {
  name: 'cnum',
  label: 'Cost per item',
  type: 'number',
  id: 'cnum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const campareprice_validation = {
  name: 'crprice',
  label: 'Compare Price',
  type: 'number',
  id: 'crprice',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const weight_validation = {
  name: 'wnum',
  label: 'Weight',
  type: 'number',
  id: 'wnum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const stock_validation = {
  name: 'snum',
  label: 'Stock',
  type: 'number',
  id: 'snum',
  placeholder: '0.0',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const options_validation = {
  name: 'options',
  label: 'name',
  type: 'text',
  id: 'options',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
  