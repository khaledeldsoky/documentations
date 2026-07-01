# OpenShift 4.14 UPI on vSphere — Quick Overview

> Quick reference only. See the HTML guide for full steps.

## Architecture

```
WSL (govc + openshift-install)
 ├──► vCenter (172.20.0.101)
 │    ├── nfs-haproxy (CentOS 9, 172.20.0.210)
 │    ├── RHCOS template (from OVA)
 │    ├── bootstrap (172.20.0.230)
 │    ├── master-0/1/2 (172.20.0.231-233)
 │    └── worker-0/1 (172.20.0.234-235)
 ├──► SSH to nfs-haproxy (HAProxy + NFS + nginx)
 └──► generates + SCPs ignition files
```

## Key IPs

| Node | IP | vCPU | RAM | Disk |
|---|---|---|---|---|
| nfs-haproxy | 172.20.0.210 | 4 | 8 GB | 40+100 GB |
| bootstrap | 172.20.0.230 | 4 | 16 GB | 120 GB |
| master-0/1/2 | 172.20.0.231-233 | 4 | 16 GB | 120 GB |
| worker-0/1 | 172.20.0.234-235 | 2 | 8 GB | 120 GB |

## Network

| Item | Value |
|---|---|
| Subnet | 172.20.0.0/16 |
| Gateway | 172.20.0.254 |
| DNS | 172.16.6.70, 172.16.1.16 |
| Domain | ocp4.example.com |

## Quick Commands

```bash
# Source env
source /home/khaled/ocp4-install/setup-env.sh

# Verify vCenter
govc about
govc datacenter.info
govc datastore.info
govc network.info

# SSH to nfs-haproxy
ssh -i ~/.ssh/openshift khaled@172.20.0.210

# Generate configs
cd /home/khaled/ocp4-install
openshift-install create ignition-configs

# Monitor
openshift-install wait-for bootstrap-complete
openshift-install wait-for install-complete

# Check cluster
export KUBECONFIG=/home/khaled/ocp4-install/config/auth/kubeconfig
oc get nodes
oc get clusteroperators
```

## Files

- `variables-reference.md` — all real values in one table
- `setup-env.sh` — source to set govc + SSH agent
- See full HTML guide for detailed steps with verification.
