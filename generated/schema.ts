// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ProcessEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProcessEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProcessEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProcessEntity", id.toString(), this);
  }

  static load(id: string): ProcessEntity | null {
    return store.get("ProcessEntity", id) as ProcessEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get exitId(): BigInt {
    let value = this.get("exitId");
    return value.toBigInt();
  }

  set exitId(value: BigInt) {
    this.set("exitId", Value.fromBigInt(value));
  }

  get exitor(): Bytes {
    let value = this.get("exitor");
    return value.toBytes();
  }

  set exitor(value: Bytes) {
    this.set("exitor", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transaction(): Bytes {
    let value = this.get("transaction");
    return value.toBytes();
  }

  set transaction(value: Bytes) {
    this.set("transaction", Value.fromBytes(value));
  }
}
