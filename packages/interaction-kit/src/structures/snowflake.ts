import type { Snowflake } from "../definitions";
import { EPOCH } from "../definitions";

/**
 * Snowflake structure is defined here:
 * https://discord.com/developers/docs/reference#snowflakes-snowflake-id-format-structure-left-to-right
 */

export function getTimestamp(snowflake: Snowflake): Date {
	return new Date(Number((BigInt(snowflake) >> BigInt(22)) + BigInt(EPOCH)));
}

export function getWorkerID(snowflake: Snowflake): number {
	return Number((BigInt(snowflake) & BigInt(0x3e0000)) >> BigInt(17));
}

export function getProcessID(snowflake: Snowflake): number {
	return Number((BigInt(snowflake) & BigInt(0x1f000)) >> BigInt(12));
}

export function getIncrement(snowflake: Snowflake): number {
	return Number(BigInt(snowflake) & BigInt(0xfff));
}
