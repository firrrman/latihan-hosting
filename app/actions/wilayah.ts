"use server";

export async function Provinci() {
  const response = await fetch("https://wilayah.id/api/provinces.json");
  const data = await response.json();
  return data.data;
}

export async function City() {
  const response = await fetch("https://wilayah.id/api/regencies/32.json");
  const data = await response.json();
  return data.data;
}

export async function District() {
  const response = await fetch("https://wilayah.id/api/districts/32.01.json");
  const data = await response.json();
  return data.data;
}

export async function Villages() {
  const response = await fetch("https://wilayah.id/api/villages/32.01.16.json");
  const data = await response.json();
  return data.data;
}
