import styles from "./styles.module.css";
import { Navbar, NavLinks } from "./layout";
import Link from "next/link";

export default function Page() {
  return (
    <Navbar>
      <NavLinks>
        <li>
          <p> skyndalex.xyz </p>{" "}
        </li>
        <li>
          <a href="https://docs.skyndalex.xyz">Documentation</a>
        </li>
        <li>
          <a href="https://dg.skyndalex.xyz"> Datadog </a>{" "}
        </li>
        <li>
          <a href="https://discord.gg/RkUYDx5bhM"> Discord </a>{" "}
        </li>
      </NavLinks>
    </Navbar>
  );
}
