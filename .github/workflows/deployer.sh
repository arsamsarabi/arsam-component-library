#!/bin/sh -l

sh -c "echo Hello world my name is $INPUT_MY_NAME"


# - name: Build container image
      #   uses: docker/build-push-action@v1
      #   with:
      #     username: ${{github.actor}}
      #     password: ${{secrets.GH_PUBLISHER}}
      #     registry: docker.pkg.github.com
      #     repository: arsamsarabi/arsam-component-library
      #     tag_with_sha: true
