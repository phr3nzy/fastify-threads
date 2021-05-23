import * as Threads from "threads"

declare module "fastify" {
	interface Fastify {
		threads: typeof Threads
	}
}
