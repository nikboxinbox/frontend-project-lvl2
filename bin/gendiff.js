#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
.description('Compares two configuration files and shows a difference')
.helpOption('-h, --HELP', 'read more information')
.version('0.0.1', '-V, --vers', 'output the current version')
.option('-f --format <type>','output format')
.argument('<filepath1> <filepath2>')
program.parse();

