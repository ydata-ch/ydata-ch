with import <nixpkgs> { };
pkgs.mkShellNoCC {
  packages = [
    jekyll
  ];
}
