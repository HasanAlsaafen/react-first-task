export default function Button({ action }) {
  return <button className={"button button-" + action}>{action}</button>;
}
