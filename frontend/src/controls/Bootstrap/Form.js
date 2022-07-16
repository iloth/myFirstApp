import { Field, ErrorMessage } from 'formik'

export function Text(props) {
  return(
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">{props.label}</label>
      <Field className={`form-control${props.error ? ' is-invalid' : ''}`} id={props.name} name={props.name} />
      <ErrorMessage name={props.name}>{(msg) => { return <div className="text-danger">{msg}</div>}}</ErrorMessage>
    </div>
  );
}

export function Password(props) {
  return(
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">{props.label}</label>
      <Field className={`form-control${props.error ? ' is-invalid' : ''}`} type="password" id={props.name} name={props.name} />
      <ErrorMessage name={props.name}>{(msg) => { return <div className="text-danger">{msg}</div>}}</ErrorMessage>
    </div>
  );
}

export function Checkbox(props) {
  return(
    <div className="mb-3">
      <div className="form-check">
        <Field className={`form-check-input${props.error ? ' is-invalid' : ''}`} type="checkbox" id={props.name} name={props.name} />
        <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
      </div>
      <ErrorMessage name={props.name}>{(msg) => { return <div className="text-danger">{msg}</div>}}</ErrorMessage>
    </div>
  );
}
